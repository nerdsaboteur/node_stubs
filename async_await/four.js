var fs = require('fs');
var {
    promisify
} = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000)
});

const doStuffSequentially = async ()=> {
    console.log("starting");
    await delay(1);
    console.log("waiting");
    try{
    writeFile("four.txt", "new file");
    beep();
    }catch(error){
        console.error(error);
    }
    
    await delay(2);
    console.log("file created");
    await delay(3);
    unlink("four.txt");
    console.log("file removed");
    beep();
    console.log("all done");

    return Promise.resolve();
};

doStuffSequentially();
