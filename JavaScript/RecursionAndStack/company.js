let company = {
    sale:[{
        name: 'John',
        salary: 2000
    },
    {
        name: 'Alice',
        salary: 1600
    }],
    development:{
        sites:[{
            name: 'Peter',
            salary: 2000
        },
        {
            name: 'Alex',
            salary: 1800
        }],
        internals:[{
            name: 'Jack',
            salary: 1800
        }]
    }
}

console.log(company);
console.log(company.development.sites);