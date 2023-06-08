// Axios is a popular HTTP client that simplifies making HTTP requests from Node.js. 
// Example: Making an HTTP GET request using axios:

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
.then(response => {
    console.log(response.data);
})
.catch(error =>{
    console.error(error);
})