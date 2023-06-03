const originalData = {
    name: 'hari',
    age: 30,
    address: {
      city: 'pune',
      country: 'India'
    }
  };

  const cloneData = JSON.parse(JSON.stringify(originalData));
  console.log(cloneData);