const myPost = {
    title: 'A post about true facts',
    body: '42',
    userId: 2
}

const options = {
    method: 'POST',
    body: JSON.stringify(myPost),
    headers: {
        'content-Type': 'application/json'
    }
}

fetch('https://jsonplaceholder.typicode.com/postsZZZ', options)
.then(res => {
    if(res.ok){
        return res.json();
    }else{
        return Promise.reject({
            status: res.status,
            statusText: res.statusText
        });
    }
})
.then(res => console.log(res))
.catch(err => console.log('Erro, with message:', err.statusText));