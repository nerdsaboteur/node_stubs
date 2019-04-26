const fetch = require('node-fetch');

var posts = [{
        title: 'one',
        body: 'body one'
    },
    {
        title: 'two',
        body: 'body two'
    }
];

function getposts() {
    setTimeout(() => {

        posts.forEach((post) => {
            console.log(post);
        })

    }, 1000);
}

function createposts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true;
            if (error) {
                reject();
            } else {
                resolve();
            }

        }, 3000);


    });
}

const promise1 = Promise.resolve('Hello');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>setTimeout(resolve, 2000, 'goodbye'))
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values)=>console.log(values));
// createposts({
//     title: 'three',
//     body: 'three body'
// }).then(getposts).catch(error => console.log("nope"))