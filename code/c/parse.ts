class Parse {
    lex : Lexer;

    constructor (str : string) {
        lex = new Lexer(str);
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

    parseFunctionBody() : FunctionBody|

}