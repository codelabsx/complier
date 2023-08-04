function p(a, b) {
    return pair=>pair(a, b);
}

function f(p) {
    return p((a, b) => a)
}


let env = [];
env.push({name: "a", value: 2});
env.push({name: "b", value: 3});

//离开语句意味着清除语句所持有的一切资源
let state = [];

//正常完成
state.push({s: "normal"});
state.push({s: "break"});
state.push({s: "continue"});
state.push({s: "return"});
state.push({s: "throw"});

console.log(eval(`    
    aaa:{
        1+2;
        bbb: {
            2+4;
            break aaa;
        }
    }`
));

//首先是tag
let tagname = [];
tagname.push({
    name: "aaa", 
    body: "1 + 2", 
});

handler.apply = function(target, thisA)
