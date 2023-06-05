fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => data.map(user => user.username))
    .then(userNames => console.log(userNames));

