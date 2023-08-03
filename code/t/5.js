//如何定义Generator函数
function* gen() {
    console.log("123");
}

//调用generator函数后, 
//无论是否有没有返回值, 都会返回一个迭代器对象
//调用generator函数之后, 无论是否有返回值, 都会返回一个迭代器对象

let it = gen();

console.log(it);

//真正让yeild发挥作用的东西是yeild运算
function* say() {
    console.log("123");
    let ans = yield "aaa"; //第1个状态, 切割成为一个部分
    console.log(ans);

    console.log("567");
    yield "aaa"; //第2个状态, 切割成为一个部分
    
    console.log("789");
    yield "aaa"; //第2个状态, 
}

let s = say();

console.log(s.next());
console.log(s.next("it666")); //会传递给上一个yeild
console.log(s.next());

//调用的时候是可以给状态进行传递参数的


//应用场景, 让函数返回多个值
function* calculate(a, b) {
    yield a + b;
    yield a - b;
}

let itx = calculate(10, 5);
console.log(itx.next().value);

