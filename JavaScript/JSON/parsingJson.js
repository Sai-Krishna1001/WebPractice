const jsonString = '{"name":"sai", "age":23, "isAdmin":true}';
const parseData = JSON.parse(jsonString);
console.log(parseData.name);
console.log(parseData.age);
console.log(parseData.isAdmin);