//  The path module provides utilities for working with file and directory paths. 
// Example: Joining path segments using path module:
const path = require('path');

const filePath = path.join(__dirname, 'files', 'data.txt');
console.log("========", filePath);
