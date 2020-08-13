const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname,'testFolder'),{}, err => {
//     if (err) console.log('ERROR ...');
// });

// create and write to file 
// fs.writeFile(path.join(__dirname,'testFolder','test.txt'),'Hello node', err => {
//     if (err) console.log('ERROR ...');
// });

// Read file
fs.readFile(path.join(__dirname,'testFolder','test.txt'), 'utf8', (err,data) => {
    if (err) console.log('ERROR ...');
    console.log(data);
});
