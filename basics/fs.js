const fs = require('fs');

//error first callback

var data = fs.readFile("file.txt", function (err, data) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});

/*

let mycallback = function(err, data){
    if(err){
        throw err;
    }
};

let usingItNow = function(err, callback){
    if(err){
        callback(new Error("nope your not ok"), "");
    }
}
*/