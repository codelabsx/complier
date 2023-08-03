function p(a, b) {
    return (p) => p(a, b); 
}

function p(a, b) {
    return [a, b];
}

function p(a, b) {
    return {a, b};
}

function f(pair) {
    return pair((a, b) => a);
}

console.log(f(p(1, 2)));