let testans = [];

function utest(name, callback) {
    let success = true;
    let error = null;

    try {
        callback();
        success = true;
    } catch (err) {
        error = err;
        success = false;
    }

    testans.push({name, success, error});
    log();
}

function log() {
    let successCount = 0;
    let failCount = 0;

    testans.forEach((item)=>{
        if (item.success === true) {
            successCount++;
        } else {
            failCount++;
            console.log(item.error);
        }
    });

    console.log(`总共 ${testans.length}个测试用例`);
    console.log(`测试成功个数: ${successCount}`);
    console.log(`测试失败个数: ${failCount}`);
}


function assert(result, expect) {
    if (result === expect) {
        console.log("执行后的结果与期待的结果一致");
    } else {
        throw Error(`期待的结果是: ${expect}, 但是实际结果为${result}`);
    }
}


function add(a, b) {
    return a + b;
}

utest('加法函数 add', () => {  
    const result = add(1, 2);
    const expect = 3;
    assert(result, expect);
});