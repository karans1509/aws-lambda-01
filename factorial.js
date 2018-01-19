exports.handler = (event, context, callback) => {
    // TODO implement
    let num = parseInt(event.num);
    if(num < 0) {
        callback(null, "Input number is negative !");
    }
    else if( num == 0) {
        callback(null, "Factorial of 0 is 1");
    }
    else {
        let fact = 1;
        for(let i = num; i >= 1; i--) {
            fact*=i;
        }
        let msg = `Factorial of ${num} is ${fact}`;
        callback(null, msg);
    }
   
};