var request = require("request");

request('http://google.com', 
function(err, response, body){

    if(err){
        handleError(err);
    }else{
        if(response.statusCode != 200){
            handleError(response.status);
        }else{
            console.log("response "+ body);
        }
    }
});

function handleError(err){
    console.log("nope!"+ JSON.stringify(err));
}