// Asynchronous Async Await Better of writing Promsies
// Using Async Await Making an IceCream

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

// let is_shop_open = true; 
let is_shop_open = false; 


function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms);
        }else{
            reject(console.log("Our shop is closed at this moment"));
        }
    })
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(0000);
        console.log("Production has been started");

        await time(2000);
        console.log("Fruits has been chopped");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`);

        await time(1000);
        console.log("The Machine has started");

        await time(2000);
        console.log(`${stocks.holder[1]} has been selected`);

        await time(3000);
        console.log(`${stocks.toppings[1]} has been selected`);

        await time(2000);
        console.log("Serve the Ice Cream to the customer");

    }catch(error){
        console.log("Customer has Left");
    }finally{
        console.log("Thank you for visiting our shop. See you again soon");
    }
}

kitchen();