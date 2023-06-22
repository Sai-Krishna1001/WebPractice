console.log('========startsWith()=========');
// startsWith()--Check if string starts with specified character(s).
const str = 'JavaScript is amazing';
console.log(str.startsWith('JavaScript')); // true
console.log(str.startsWith('Java')); // true
console.log(str.startsWith('javascript')) // false
// position is optional
// if not specified, the default value is 0
console.log(str.startsWith('Script', 4)); // true
console.log(str.startsWith('SCRIPT', 4)); // false

console.log('========endsWith()========')
// endsWith() --Check if string ends with specified character(s).
console.log(str.endsWith('amazing')); // true
console.log(str.endsWith('ing')) // true
console.log(str.endsWith('Amazing')); // false
// length is optional
// if not specified, the default value is length of the string
console.log(str.endsWith('is', 13)); // true
console.log(str.endsWith('i', 13)); // false
console.log(str.endsWith('s', 13)); // true

console.log('==========includes()============');
// includes()--Check if string contains specified character(s).
console.log(str.includes('Script')); // true
console.log(str.includes('script')); // false
console.log(str.includes(' ')); // true
console.log(str.includes('array')); // false

console.log('==========slice()===========');
// slice() --Copy some part of string without modifying the original one.

// default start index is 0
console.log(str.slice()); // 'Javascript is amazing'
// start copy at index 4
console.log(str.slice(4)); // 'Script is amazing'
// end copy at index 10(character at this index will not be included)
console.log(str.slice(0,10)); // 'Javascript'

// toUpperCase()
console.log(str.toUpperCase()); // 'JAVASCRIPT IS AMAZING'

// toLowerCase()
console.log(str.toLowerCase()); // 'javascript is amazing'

// charAt() --Return character at specified position.
console.log(str.charAt()); // 'J'
console.log(str.charAt(11)); // 'i'

console.log('=========split()==========');
// split() --Split string into array of substrings.
const strNew = 'JavaScript-is-amazing';
console.log(str.split());
console.log(str.split('S'));
console.log(str.split('is'));
console.log(str.split(' '));
console.log(strNew.split('-'));

console.log('============replace()===========');
// replace() --Replaces specified value with another value in a string.
console.log(str.replace('JavaScript', 'Node.js'));
// replace() method is case sensitive
// replace will not work
console.log(str.replace('Javascript', 'Node.js'));
// use regular expression for case insensitive
console.log(str.replace(/Javascript/i, 'Node.js'));
// replace() method replaces only the first match
console.log(str.replace('a','A'));
// to replace all matches, use regular expression
console.log(str.replace(/a/g, 'A'));

console.log('==========repeat()============');
const name = 'Krishna';
console.log(name.repeat(3)); // 'KrishnaKrishnaKrishna'
// default vaule = 0
console.log(name.repeat()); // ''


