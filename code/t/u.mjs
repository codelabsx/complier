let testRes = [];

function utest(name, callback) {
    let sucess = true;
    let error = null;

    try {
        callback();
    } catch(err) {
        sucess = false;
        error = err;
    }

    testRes.push(name, sucess, error);
}

//将每一个值
testRes.forEach((item)=>{
    if (item.sucess === true) {

    } else {
        
    }
})