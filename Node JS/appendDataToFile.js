const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    const dataToAppend = '\nNew content to append to the file.\n';
    fs.appendFile('data.txt', dataToAppend, 'utf8', (err)=>{
        if(err){
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Data appended to file successfully');
    });
});

server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})
