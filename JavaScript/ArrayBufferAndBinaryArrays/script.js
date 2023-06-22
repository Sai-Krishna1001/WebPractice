let buffer = new ArrayBuffer(16);
// alert(buffer.byteLength); // 16

// Uint8Array // 0 to 255
// Uint16Array // 0 to 65535
// Uint32Array // 0 to 4294967295
// Float64Array // 5.0*10^-324 to 1.8*10^308

let view = new Uint32Array(buffer);
// alert(view.length); // 4
// alert(view.byteLength); // 16

view[0] = 123456;
for(let num of view){
    alert(num); // 123456 0 0 0 
}