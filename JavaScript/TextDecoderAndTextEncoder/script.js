/* TextDecoder
let decoder = new TextDecoder([label], [options])
let str = decoder .decode([input], [options])
*/
let unit8array = new Uint8Array([72, 101, 108, 108, 111]);
alert(new TextDecoder().decode(unit8array)); // Hello

let unit8array1 = new Uint8Array([228,189,160,229,165,189]);
alert(new TextDecoder().decode(unit8array1));

let unit8array2 = new Uint8Array([0,72,101,108,108,111,0])
let binaryString = unit8array2.subarray(1,-1);
alert(new TextDecoder().decode(binaryString)) // Hello

/**
 * let endcoder = new TextEncoder()
 * Methods:
 * encode(str)
 * encodeInto(str, destination)
 */
let encoder = new TextEncoder()
let unit8array3 = encoder.encode("Hello");
alert(unit8array);