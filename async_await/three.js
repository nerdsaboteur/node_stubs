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

const doStuffSequentially = () => Promise.resolve()
    .then(() => console.log("starting"))
    .then(() => delay(1))
    .then(() => console.log("waiting"))
    .then(console.log)
    .then(() => delay(2))
    .then(() => writeFile("three.txt", "new file"))
    .then(beep)
    .then(() => 'file created')
    .then(console.log)
    .then(() => delay(3))
    .then(() => unlink('three.txt'))
    .then(beep)
    .then(() => "file removed")
    .then(console.log)
    .catch(console.error)



doStuffSequentially()
    .then(() => console.log("AGAIN"))
    .then(() => doStuffSequentially())
    .then(() => console.log("ENOUGH"))