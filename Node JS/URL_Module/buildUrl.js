const url = require('url');
const urlObject = {
    protocol: 'https',
    host: 'www.example.com',
    pathname: '/path',
    query: { param1: 'value1', param2: 'value2'}
};
const urlString = url.format(urlObject);
console.log(urlString);