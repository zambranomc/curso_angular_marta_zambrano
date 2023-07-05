const crypto = require('crypto')
const secret = crypto.randomBytes(32).toString('hex');//32 bytes
console.log(secret);