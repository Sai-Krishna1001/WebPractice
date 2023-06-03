console.log("Start");

// Aysnchronous operation using setTimeout
const delay = (milliseconds)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },milliseconds);
    });
};

// Asynchronous function using async/await
const asyncFunction = async()=>{
    console.log("Before delay");
    await delay(2000); // wait for 2 seconds aynchronously
    console.log("After delay");
};

asyncFunction();

console.log("End");