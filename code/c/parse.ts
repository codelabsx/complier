abstract class AstNode {
    //该函数表示打印对象的AST node节点
    public abstract dump(prefix : string) : void;
}

abstract class Statement extends AstNode {
    static isStatementNode(node : any) : node is Statement {
        if (!node) {
            return false;
        } else {
            return true;
        }
    }
}

class Prog extends AstNode {
    stmts : Statement[];
    constructor(stmts : Statement[]) {
        super();
        this.stmts = stmts;    
    }

    public dump(prefix: string): void {
        console.log(prefix+"Prog");
        this.stmts.forEach(x => x.dump(prefix+"\t"));
    }
}

class FunctionDecl extends Statement {
    name : string;
    body : FunctionBody;

    constructor(name : string, body : FunctionBody) {
        super();
        this.name = name;
        this.body = body;
    }

    public dump(prefix: string): void {
        console.log(prefix+"FunctionDecl "+this.name);
        this.body.dump(prefix+"\t");
    }
}

class FunctionCall extends Statement{
    name : string;
    parameters : string[];
    //指向别的函数声明
    definition : FunctionDecl | null = null;
    
    constructor(name : string, parmeters : string[]) {
        super();
        this.name = name;
        this.parameters = parmeters;
    }

    static isFunctionCallNode(node : any) : node is FunctionCall {
        if (!node) {
            return false;
        }

        if (Object.getPrototypeOf(node) == FunctionCall.prototype) {
            return true;
        }

        else {
            return false;
        }
    }


    public dump(prefix: string): void {
        console.log(prefix+"FunctionCall "+this.name + (this.definition!=null ? ", resolved" : ", not resolved"));
        this.parameters.forEach(x => console.log(prefix+"\t"+"Parameter: "+ x));
    }
}



class FunctionBody extends AstNode {
    stmts : FunctionCall[];
    
    constructor(stms : FunctionCall[]) {
        super();
        this.stmts = stms;
    }

    static isFunctionBodyNode(node : any) : node is FunctionBody {
        if (!node) {
            return false;
        }

        if (Object.getPrototypeOf(node) == FunctionBody.prototype) {
            return true;
        }

        else {
            return false;
        }

    }

    public dump(prefix:string) : void{
        console.log(prefix+"FunctionBody");
        this.stmts.forEach(x => x.dump(prefix+"\t"));
    }
}


class Parse {
    lex : Lexer;

    constructor (str : string) {
        this.lex = new Lexer(str);
    }

    parseFunctionDecl() : FunctionDecl | null | void {
        let token : Token = this.lex.nextToken();

        if (token.literal == "function") {
            token = this.lex.nextToken();
            
            if (token.t == TokenType.ident) {
                token = this.lex.nextToken();

                if (token.literal == '(') {
                    token = this.lex.nextToken();

                    if (token.literal == ')') {
                        let functionbody = this.parseFunctionBody();

                        if (functionbody != null) {
                            return new FunctionDecl("function", functionbody);
                        }
                    }
                }
            }
        }
    }

    parseFunctionBody() : FunctionBody|null|void {
        let stmts : FunctionCall[] = [];
        let token : Token = this.lex.nextToken();

        if (token.literal == "{") {
            let functionCall = this.parseFunctionCall();

            while (functionCall != null) {
                stmts.push(functionCall);
                functionCall = this.parseFunctionCall();
            }
            token = this.lex.nextToken();
            
            if (token.literal == "}") {
                return new FunctionBody(stmts);
            } 

            else {
                return;
            }
        }

        return null;
    }

    parseFunctionCall() : FunctionCall|null|void {
        let params : string[] = [];
        let token = this.lex.nextToken();
        if (token.t == TokenType.ident) {
            token = this.lex.nextToken();
            
            if (token.literal == "(") {
                token = this.lex.nextToken();

                while (token.literal != ')') {
                    if (token.)
                }
            } 
        }
    }

}