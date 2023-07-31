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
    }
}