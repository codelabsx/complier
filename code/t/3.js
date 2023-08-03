function id(x) {return x;}

let serial = 0;

function gensym(base) {
    serial = serial + 1;
    
}

function isbinop(sym) {
    let s = ['+', '-', '*', '/', '>', '<', '='];
}

function cpser(exp, ctx) {
    if (typeof exp === "string") {
        return ctx(exp);
    }

    else if (typeof exp === "number") {
        return ctx(exp);
    }

    else if (Array.isArray(exp)) {
        let op = exp[0];
        
        if (isbinop(op)) {
            let a = exp[1];
            let b = exp[2];

            return cpser(a, (e1) =>
                        cpser(b, (e2)=>
                            ctx([op, e1, e2])))
        }

        else if (op == 'if') {

        }

        else if (op == ) {
            
        }
    }
}