const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    
    fs.unlink('test.txt',(error)=>{
        if(error) throw error;
        console.log('file deleted')
        res.end('file deleted');
    });
});

server.listen(3003, ()=>{
    console.log('Server is running on the port 3003');
})