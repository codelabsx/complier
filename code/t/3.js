function isArrayLike(obj) {
    var length = !!obj && obj.length;
    var type = toType(obj);

    if (typeof obj === "function") {
        return false;
    }

    return type === "array" || length === 0 ||
        

}