var {promisify} = require('util');

var delay = (seconds, callback)=>{
    if(seconds > 3){
        callback(new Error(`oooh nope seconds too high at ${seconds}`));
    }else{
        setTimeout(()=>{
            callback(null,  `seconds was ${seconds} so yea` );
        });
    }
}

var promiseDelay = promisify(delay);

promiseDelay(1)
    .then(console.log)
    .catch((error) => console.log(`error: ${error.message}`));

promiseDelay(6)
.then(console.log)
.catch((error)=>console.log(`error: ${error.message}`));