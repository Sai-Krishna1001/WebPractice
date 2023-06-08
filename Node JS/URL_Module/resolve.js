const url = require('url');
const baseUrl = 'https://www.example.com/base';
const relativeUrl = '/path';

const resolvedUrl = url.resolve(baseUrl,relativeUrl);
console.log(resolvedUrl);