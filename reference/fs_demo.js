const path = require('path');
const fs = require('fs');

fs.mkdir(path.join(__dirname,'testFolder'),{}, err => {
    if (err) console.log('ERROR ...');
});

// create and write to file 
fs.writeFile(path.join(__dirname,'testFolder','test.txt'),'Hello node', err => {
    if (err) console.log('ERROR ...');
});
