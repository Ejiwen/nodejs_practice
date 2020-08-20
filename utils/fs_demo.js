const fs = require('fs');
const path = require('path');

const newDir = "test3";


fs.mkdir(path.join(__dirname,newDir), () => {
    console.log("SUCCESS");
});