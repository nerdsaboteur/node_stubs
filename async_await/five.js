var fs = require('fs');
var {
    promisify
} = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readDir = promisify(fs.readDir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000)
});

readDir.then((files)=>{
    console.log(files); 
});