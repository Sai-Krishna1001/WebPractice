
//
let count  = 0;
let intervalId = setInterval(function(){
    console.log("Interval message");
    count++;
    if(count==5){
        clearInterval(intervalId);
    }
},1000)