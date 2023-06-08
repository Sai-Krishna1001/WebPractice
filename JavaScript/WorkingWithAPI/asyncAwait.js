async function fetchUsers(endpoint){
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
}

fetchUsers('https://jsonplaceholder.typicode.com/users')
.then(data => {
    console.log(data.map(user => user.username));
});