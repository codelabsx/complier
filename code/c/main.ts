enum TokenType{
    function,
    ident,
    num,

    startBlock,
    endBlock,
    leftPare, //表示左括号
    rightPare, //表示右边括号

    //表示非法字符
    illegal,
}   

let keyWorld = new Map<string, TokenType>([
    ["function", TokenType.function],
]);


function isKeyWorld(key : string) : TokenType {
    if (keyWorld.has(key)) {
        let t = keyWorld.get(key);
        if (t != undefined) {
            return t; 
        }
    }

    return TokenType.ident;
}

function isAlpha(ch : string) : boolean {
    return ch >='a' && ch <= 'z';
}

function isDigit(ch : string) : boolean {
    return ch >= '0' && ch <= '9';
}

function isSpace(ch : string) : boolean {
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
    t : TokenType;
    literal : string;
    
    constructor(t: TokenType, literal : string) {
        this.t = t;
        this.literal = literal;
    }
}

class Lexer {
    input : string;
    ch : string = "";
    position: number = 0;
    readPosition : number = 0;

    constructor (input : string) {
        this.input = input;
        this.readChar();
    }

    readChar() {
        
        let len = this.input.length;
        
        if (this.readPosition >= len) {
            this.ch = " ";
        } else {
            this.ch = this.input[this.readPosition];    
        }
        
        this.position = this.readPosition;
        this.readPosition ++;
    }


    nextToken() {
        this.skipWhiteSpace();
        
        let token : Token | null = this.matchOperator();

        if (token == null) {
            token = this.matchIdOrNumOrILL();
        }

        return token;
    }

    matchOperator() : Token | null {
        let token : Token;

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

    matchIdOrNumOrILL() : Token {
        let token : Token|null = this.matchId();
        
        if (token == null) {
            token = this.matchNumber();
            
            if (token == null) {
                token = new Token(TokenType.illegal, this.ch);
            }

        }

        return token;
    }



    matchId() : Token | null {
        let pos : number = this.position;

        if (isAlpha(this.ch)) {
            
            while (isAlpha(this.ch)) {
                this.readChar();
            }

            let str : string = this.input.slice(pos, this.position);
            let t : TokenType = isKeyWorld(str);
            
            let token : Token = new Token(t, str);
            return token;
        }

        return null;
    }

    matchNumber() : Token | null {
        let pos : number = this.position;
        if (isDigit(this.ch)) {

            while (isDigit(this.ch)) {
                this.readChar();
            }

            let num : string = this.input.slice(pos, this.position);
            let token  = new Token(TokenType.num, num);
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
