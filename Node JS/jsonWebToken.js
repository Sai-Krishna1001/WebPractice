// jsonwebtoken is a module for creating and verifying JSON Web Tokens(JWT) for authentication and authorization purposes.
// Example: Generating a JWT token:

const jwt = require('jsonwebtoken');
const payload = {
    userId: 123
};
const secretKey = 'my-secret-key';
const token = jwt.sign(payload, secretKey);

console.log(token);