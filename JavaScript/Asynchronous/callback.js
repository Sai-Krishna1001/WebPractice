
// CallBack Example

function one(call_two){
    call_two();
    console.log("Step 1");
    // call_two();
}

function two(){
    console.log("Step 2");
}

// one();
// two();

one(two)

