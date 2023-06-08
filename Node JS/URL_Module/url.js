const url = require('url');
const address = 'http://localhost:8080/home.html?year=2018&&month=feb';

const query = url.parse(address, true);
console.log(query.host);