var fs = require('fs');
var { promisify } = require('util');

var writeFile = promisify(fs.writeFile);

writeFile('two.txt', 'this sample file')
.then(() => console.log('file created'))
.catch((error)=>console.log('error creating file'));