
const path = require('path');
// console.log(__filename);
// console.log("-----------------");
// console.log(__dirname);
// console.log("-----------------");


console.log(path.extname(__filename));
console.log("-----------------");
console.log(path.basename(__dirname));
console.log("-----------------");
console.log(path.join(__dirname,"test","hello.txt"));