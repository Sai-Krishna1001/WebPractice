const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const dataToWrite = 'New Data uploaded in the file';
    fs.writeFile('data.txt', dataToWrite, 'utf8', (err)=>{
        if(err){
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('file data overrided successfully');
    });
});

server.listen(3002, ()=>{
    console.log('Server is running on port 3002');
})