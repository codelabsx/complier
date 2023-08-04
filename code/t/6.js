let token = {"a": 1, "b": 2}

function getType(str) {
    return token.str;
}

function parseOp(str) {
    if (typeof str === "int") {
        //一段复杂的操作
    }

    else if (typeof str === "boolean") {
        //一段复杂的操作
    }

    else {
        //一段复杂的操作
    }
}

//1.可以先对复杂操作进行一个抽取方法
function parseOp(str) {
    let value;
    if (typeof str === "int") {
        value = parseInt(str);
        return value;
    }

    else if (typeof str === "boolean") {
        value = parseBool(str);
        return value;
    }

    else {
        value = parseStr(str);
    }
}

function parseBool(str) {

}

function parseInt(str) {

}

function parseStr(str) {

}


//2. 观察抽取的方法
