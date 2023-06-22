// new TypedArray(buffer, [byteOffset], [length])

// new TypedArray(object)
// let arr  = new Uint8Array([0,1,2,3]);
// alert(arr.length) // 4
// alert(arr[1]) // 1

// new TypedArray(typedArray)
// let arr16 = new Uint16Array([1,1000])
// let arr8 = new Uint8Array(arr16);
// alert(arr8[0]) // 1
// alert(arr8[1]) // 256*3 + 232 = 1000    o/p:232

// new TypedArray(length)
// let array = new Uint16Array(4);
// alert(Uint16Array.BYTES_PER_ELEMENT) // 2
// alert(array.byteLength) // 8

// new TypedArray()
let arr8 = new Uint8Array([0,1,2,3])
let arr16 = new Uint16Array(arr8.buffer)
alert(arr16);

