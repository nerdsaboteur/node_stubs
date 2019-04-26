//this is called direct style

function hideStr(str){
    return str.replace(/[a-zA-Z]/g, 'X');
}

var hidden = hideStr("Hello World");

console.log(hidden);