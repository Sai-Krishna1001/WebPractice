// Express is a popular web application framework for Node.js. It provides a minimalistic and flexible set of features for building web applications and APIs

const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello krishna!');
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})