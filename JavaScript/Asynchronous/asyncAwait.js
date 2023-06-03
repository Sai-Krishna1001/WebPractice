async function fetchData() {
    try {
      const response = await fetch('https://reqres.in/api/users/');
      const data = await response.json();
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
  console.log('After calling fetchData');
  