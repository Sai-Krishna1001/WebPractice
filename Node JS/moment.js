// moment.js is library for parsing, validating, manipulating and formatting dates and times.
// Example: Formatting a date using moment

const moment = require('moment');
const currentDate = moment().format('YYYY-MM-DD');

console.log(currentDate);