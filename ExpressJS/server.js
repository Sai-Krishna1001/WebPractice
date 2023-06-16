const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function(req,res){
    res.send('<h1>Hello, Krishna</h1>');
});

app.get('/products', (req,res)=>{
    res.json(products); 
});

const products = [
    {
        id:1,
        name:'iphone'
    },
    {
        id:2,
        name:'mi'
    },
    {
        id:3,
        name:'realme'
    }
];

app.get('/products/:id', (req,res)=>{
    const newData = products.filter(item => item.id.toString() === req.params.id);
    return res.json(newData);
});

app.post('/addproducts', (req,res)=>{
    const {id, name} = req.body;
    console.log(id,name);
    return res.send('Data Stored');
});

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});