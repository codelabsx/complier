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

let sucessCount = 0;
let failCount = 0;
testRes.forEach((item)=>{
    if (item.sucess === true) {
        sucess
    } else {
        
    }
});