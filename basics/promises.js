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
    return new Promise((resolve, reject)=>{
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

createposts({
    title: 'three',
    body: 'three body'
}).then(getposts).catch(error => console.log("nope"))