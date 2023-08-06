var TokenType;
(function (TokenType) {
    TokenType[TokenType["function"] = 0] = "function";
    TokenType[TokenType["ident"] = 1] = "ident";
    TokenType[TokenType["num"] = 2] = "num";
    TokenType[TokenType["startBlock"] = 3] = "startBlock";
    TokenType[TokenType["endBlock"] = 4] = "endBlock";
    TokenType[TokenType["leftPare"] = 5] = "leftPare";
    TokenType[TokenType["rightPare"] = 6] = "rightPare";
    //表示非法字符
    TokenType[TokenType["illegal"] = 7] = "illegal";
})(TokenType || (TokenType = {}));

let keyWorld = new Map([
    ["function", TokenType.function],
]);

function isKeyWorld(key) {
    if (keyWorld.has(key)) {
        let t = keyWorld.get(key);
        if (t != undefined) {
            return t;
        }
    }
    return TokenType.ident;
}

function isAlpha(ch) {
    return ch >= 'a' && ch <= 'z';
}
function isDigit(ch) {
    return ch >= '0' && ch <= '9';
}
function isSpace(ch) {
    switch (ch) {
        case ' ':
            return true;
        case '\t':
            return true;
        case '\n':
            return true;
        case '\r':
            return true;
        default:
            return false;
    }
}
class Token {
    constructor(t, literal) {
        this.t = t;
        this.literal = literal;
    }
}
class Lexer {
    constructor(input) {
        this.ch = "";
        this.position = 0;
        this.readPosition = 0;
        this.input = input;
        this.readChar();
    }
    readChar() {
        let len = this.input.length;
        if (this.readPosition >= len) {
            this.ch = " ";
        }
        else {
            this.ch = this.input[this.readPosition];
        }
        this.position = this.readPosition;
        this.readPosition++;
    }
    nextToken() {
        this.skipWhiteSpace();
        let token = this.matchOperator();
        if (token == null) {
            token = this.matchIdOrNumOrILL();
        }
        return token;
    }
    matchOperator() {
        let token;
        switch (this.ch) {
            case "(":
                token = new Token(TokenType.leftPare, "(");
                return token;
            case ")":
                token = new Token(TokenType.rightPare, ")");
            case "{":
                token = new Token(TokenType.startBlock, "{");
                return token;
            case "}":
                token = new Token(TokenType.endBlock, "}");
                return token;
        }
        return null;
    }
    matchIdOrNumOrILL() {
        let token = this.matchId();
        if (token == null) {
            token = this.matchNumber();
            if (token == null) {
                token = new Token(TokenType.illegal, this.ch);
            }
        }
        return token;
    }
    matchId() {
        let pos = this.position;
        if (isAlpha(this.ch)) {
            while (isAlpha(this.ch)) {
                this.readChar();
            }
            let str = this.input.slice(pos, this.position);
            let t = isKeyWorld(str);
            let token = new Token(t, str);
            return token;
        }
        return null;
    }
    matchNumber() {
        let pos = this.position;
        if (isDigit(this.ch)) {
            while (isDigit(this.ch)) {
                this.readChar();
            }
            let num = this.input.slice(pos, this.position);
            let token = new Token(TokenType.num, num);
            return token;
        }
        return null;
    }
    skipWhiteSpace() {
        while (isSpace(this.ch)) {
            this.readChar();
        }
    }
}
let lexer = new Lexer("123 function add");
console.log(lexer.nextToken());
console.log(lexer.nextToken());
console.log(lexer.nextToken());
