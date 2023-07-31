const allUnitTestResults = [];

function unitTest(name, callback) {
    let sucess = false;
    let error = null;

    try {
        callback(); //执行函数
        sucess = true;
    } catch (err) {
        error = err;
    }

    allUnitTestResults.push({
        name, //表示测试名称
        sucess,
        error
    });
}

function add(num1, num2)
{
    return num1 + num2;
}

unitTest('加法函数 add', () => {
    const result = add(1, 2);
    const expect = 3;

    if (result === expect) {
        console.log('加法函数测试成功');
    } else {
        throw Error(
            `myMath.add 加法测试失败, 期待结果应该是: ${expect}, 但实际结果为: ${result}`
        );
    }
});

function sub(num1, num2)
{
    return num1 - num2;
}

unitTest('减法函数 sub', () => {
    const result = sub(2, 1);
    const expect = 1;
    
    if (result === expect) {
        console.log('减法函数测试成功');
    } else {
        throw Error(
            `myMath.sub 减法函数测试失败, 期待结果应该是: ${expect}, 但实际结果为: ${result}`
        );
    }
});


//设置所有测试函数
let sucessCount = 0;
let failCount = 0;
allUnitTestResults.forEach((item) => {
    if (item.sucess === true) {
        sucessCount++;
    } else {
        failCount++;
        console.log(item.error);
    }
});

console.log(`总共 ${allUnitTestResults.length}个测试用例`);
console.log(`测试成功个数: ${sucessCount}`);
console.log(`测试失败个数: ${failCount}`);