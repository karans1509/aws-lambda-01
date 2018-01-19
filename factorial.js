exports.handler = (event, context, callback) => {
    // TODO implement
    let num = parseInt(event.num);
    let fact = 1;
    for(let i = num; i >= 1; i--) {
        fact*=i;
    }
    let msg = `Factorial of ${num} is ${fact}`;
    callback(null, msg);
};