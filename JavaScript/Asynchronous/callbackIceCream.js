
// Asynchronous Callback Making an IceCream

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

let order = (fruit_name, call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
        call_production();
    },2000);
    
}
let production = ()=>{
    setTimeout(()=>{
        console.log("Order Received... Starting the production");
        setTimeout(()=>{
            console.log("The Fruits has been chopped");
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`);
                setTimeout(()=>{
                    console.log("The Machine has been started");
                    setTimeout(()=>{
                        console.log(`${stocks.holder[0]} has been selected`);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} has been selected`);
                            setTimeout(()=>{
                                console.log("serve the IceCream");
                            },2000);
                        },3000);
                    },2000);
                },1000);
            },1000);
        },2000);
    },0000);
};

order(0,production);