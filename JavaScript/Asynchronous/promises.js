function fetchData() {
    return new Promise(function(resolve, reject) {
      fetch('https://reqres.in/api/users/')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  fetchData()
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error('Error:', error));
  console.log('After calling fetchData');
  