function delay(seconds, callback){
    setTimeout(callback, seconds*1000);
}

console.log("starting");

//this is callback hell

delay(2, ()=>{
    console.log("2 seconds");
    delay(3, ()=>{
        console.log("3 seconds");
    });
});