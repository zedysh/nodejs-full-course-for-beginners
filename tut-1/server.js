// Differences between JS and Node.js
// 1. Node runs on a server - not in a broswer
// 2. The console is the terminal window

// 3. global object instead of window object
// console.log(global);

// 4. has Common Core modules
// 5. CommonJS modules instead of ES6 modules

// 6. NodeJS is missing some APIs like fetch

const os = require("os");
const path = require("path");
const { add, substract, multiply, divide } = require("./math");

console.log(add(2, 3));
console.log(substract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
