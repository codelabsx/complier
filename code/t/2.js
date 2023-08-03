/*
<template>
    <div class="v-counter">
        <div class="v-text">{{num}}</div>
        
        <button class="v-btn" @click="click"> 
            点击数字加1
        </button>
    </div>
<template/>

*/


function setup() {
    return (_ctx, _cache) => {

        let fc = {class: 'v-counter'};
        let sc1 = {class: 'v-text'};
        let sc2 = {class: 'v-btn', onclik: 'click'};

        return h('div', fc, [ h('div', sc1, toDisplayString(num.value)),
                              h('button', sc2, "点击数字加1")])
    };
}

function parseOption(p) {
    let value = null;
    
    if (typeof p == 'bool') {
        value = arg.contains("-" + option.value());
    } else if (typeof p == 'int') {
        //随便写的东西
        let index = arg.indexOf("-" + option.value());
        value = px();
    } else if (typeof p == 'string') {
        let index = arg.indexOf("-" + option.value());
        value = arg.get(index + 1);
    }
}

//我们如何来重构这段代码
//1. 首先是将分支中的块的代码进行一个抽取
function parseOption(p) {
    let value = null;
    
    if (typeof p == 'bool') {
        value = parseBool();
    } else if (typeof p == 'int') {
        //随便写的东西
        let index = arg.indexOf("-" + option.value());
        value = parseInt();
    } else if (typeof p == 'string') {
        let index = arg.indexOf("-" + option.value());
        value = arg.get(index + 1);
    }   
}


function parse() {
    if () {
        return parseInt()
    }
    else if() {
        return parseBoolean()
    }
    else {
        return parseString()
    }
}

//然后将这个些东西做成一个接口