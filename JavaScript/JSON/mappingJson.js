const jsonArray = [
    {name: 'Jhon', age:30},
    {name: 'Alice', age:25},
    {name: 'Bob', age: 35}
];

const transformedData = jsonArray.map(item => ({
    fullName: `${item.name} Doe`,
    age: item.age + 1

}));

console.log(transformedData);