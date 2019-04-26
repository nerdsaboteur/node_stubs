let cats = [{
        color: 'grey',
        softness: 'high'
    },
    {
        color: 'black',
        softness: 'medium'
    }
];

function getCats(){
setTimeout(()=>{
    cats.forEach((cat) => {
        console.log(cat);
    });
},1000);
}

function createCat(cat){
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        cats.push(cat);

        const err = false;
        if (err) {
            reject();
        } else {
            resolve();
        }

    }, 3000);
    });

   
}
createCat({color:'white', softness:'wow'})
.then(getCats)
.catch((err)=>console.log('nope'));
