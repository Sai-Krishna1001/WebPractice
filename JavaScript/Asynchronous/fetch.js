
fetch('https://reqres.in/api/users/',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
}) 
.then(response => {
    return response.json();
    // if(response.ok){
    //     console.log('SUCCESS');
    // }else{
    //     console.log('Not Successful');
    // }
})
.then(data => console.log(data))
.catch(error => console.log('ERROR')) 