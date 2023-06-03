// The XMLHttpRequest (XHR) object is a built-in browser API
//  that allows you to make HTTP requests. 
// It has been around for a long time and has good browser compatibility. 
// Here's a basic example of making a GET request using XMLHttpRequest:
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://roadmap.sh/react", true);
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        var response = JSON.parse(xhr.responseText);
        console.log(response);
    }
};
xhr.send();
