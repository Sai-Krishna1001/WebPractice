
function fetchData(callback){
    setTimeout(() => {
        const data = 'Some data fetched from an API';
        callback(data);
    }, 2000);
}

function processFetchedData(data){
    console.log("Processing data:", data);
}

fetchData(processFetchedData);
console.log('After calling fetchData');