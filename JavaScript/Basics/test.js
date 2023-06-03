function typeCheck(value){
    const return_value = Object.prototype.toString.call(value);
    const type = return_value.substring(
        return_value.indexOf(" ")+1,
        return_value.indexOf("]"));
    return type.toLowerCase();
    // return return_value;
}
console.log(typeCheck(null));
console.log("krishna");