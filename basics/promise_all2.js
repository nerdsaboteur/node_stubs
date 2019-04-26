const fetch = require('node-fetch');



let promise1 = Promise.resolve('Hello');
let promise2 = new Promise((resolve, reject)=>
setTimeout(resolve,2000,'bitches'));
let promise3 = 10;
let promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json())


Promise.all([promise1, promise2, promise3, promise4]).then((values)=>console.log(values));