const jsonArray = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  
  
  const filteredData = jsonArray.filter(item => item.age>30);
  console.log(filteredData);