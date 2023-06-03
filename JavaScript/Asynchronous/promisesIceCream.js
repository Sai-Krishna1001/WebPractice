
// Asynchronous Promises Making an IceCream

//                          TIME(SECONDS)
// 1. place the order           2
// 2. cut the fruit             2  
// 3. add water and ice         1
// 4. start the machine         1
// 5. select container          2
// 6. select toppings           3
// 7. serve Icecream            2


let stocks = {
    Fruits:['strawberry', 'grapes','banana','apple'],
    liquid:['water','ice'],
    holder:['cone','cup','stick'],
    toppings:['chocolate','peanuts']
}

let is_shop_open = true; 

let order = (time,work)=>{
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            },time);
        }else{
            reject(console.log("Sorry, the shop is closed"));
        }
    })
}

order(2000,()=>{console.log(`${stocks.Fruits[0]} is selected`)})

.then(()=>{
    return order(2000, ()=>{console.log("The production has been started")})
})
.then(()=>{
    return order(2000, ()=>{console.log("Fruits has been chopped")})
})
.then(()=>{
    return order(1000, ()=>{console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`)})
})
.then(()=>{
    return order(1000,()=>{console.log("The Machine has been started")})
})
.then(()=>{
    return order(2000, ()=>{console.log(`${stocks.holder[0]} has been selected`)})
})
.then(()=>{
    return order(3000, ()=>{console.log(`${stocks.toppings[0]} has been selected`)})
})
.then(()=>{
    return order(2000, ()=>{console.log("serve the IceCream")})
})
.catch(()=>{console.log("Customer Left")})
.finally(()=>{console.log("Thank you for visiting our IceCream Shop")})