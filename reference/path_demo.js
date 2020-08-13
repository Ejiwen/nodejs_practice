const path = require('path');

// Base file name 
console.log(__filename);

// display just the name of file
console.log(path.basename(__filename));

// Direcotory name
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));

// Create path object
console.log('-----------');
console.log(path.parse(__filename));
console.log('-----------')

// Concatenate path
console.log(path.join(__dirname, 'test', 'helle.html'));