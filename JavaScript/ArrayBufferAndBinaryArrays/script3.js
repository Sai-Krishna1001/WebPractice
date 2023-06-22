// 8bitIntegers  100000001 --> 257
let uint8Array = new Uint8ClampedArray(16)
let num = 256
// alert(num.toString(2)); // 100000000

uint8Array[0] = 256 // 100000000 -> 00000000 -> 0
uint8Array[1] = -257 // 100000001 -> 00000001 -> 1

// alert(uint8Array[0]) // 255
// alert(uint8Array[1]) // 0

// arr.set(fromArr, [offset])
// arr.subarray([begin,end])

let buffer = new Uint8Array([255,255,255,255]).buffer;
let dataView = new DataView(buffer)
alert(dataView.getUint8(0)); //255
alert(dataView.getUint16(0)); // 65535
alert(dataView.getUint32(0)); // 4294967295
dataView.setUint32(0,0);