// continuation passing style

function hideStr(str, done) {
    process.nextTick(()=>{
        done(str.replace(/[a-zA-Z]/g, 'X'));
    });
}

hideStr("Hello World", (hidden) => {
    console.log(hidden);
});

