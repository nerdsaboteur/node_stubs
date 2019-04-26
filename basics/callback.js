var posts =[
    {
        title:'one',
        body: 'body one'
    },
      {
          title: 'two',
          body: 'body two'
      }
];

function getposts(){
    setTimeout(()=>{

        posts.forEach((post)=>{
            console.log(post);
        })

    }, 1000);
}

function createposts(callback){
    let post={
        title: 'three',
        body: 'three body'
    };
    setTimeout(()=>{
        posts.push(post);
        callback();
    },3000);
}

createposts(getposts);
