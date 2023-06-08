const url = require('url');
const urlString = 'https://example.com/path?param1=value&param2=value2';
const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl.hostname);// example.com
console.log(parsedUrl.pathname); // '/path'
console.log(parsedUrl.query); //{ param1: 'value1', param2: 'value2' }
