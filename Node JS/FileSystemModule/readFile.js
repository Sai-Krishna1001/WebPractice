const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    fs.readFile('data.txt', 'utf8', (err, data)=>{
        if(err){
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end('data read successfully');
    });
});
server.listen(3001, ()=>{
    console.log("Server is running on port 3001");
})