const fs = require('fs');
const path= require('path');


// Create and write to file function
const createFile = (folderName, fileName) => {
    const folderParent = path.join(__dirname,folderName);
    const fileToCreate = path.join(__dirname,folderName,fileName);
    // Folder Creation 
        if (!fs.existsSync(folderParent)) {
            console.log("folder not existe");
            fs.mkdir((path.join(__dirname,folderName)),  (err) => {
            if (err) throw console.log('folder error');
    })
    } else {
        console.log("Folder exist already .... sorry!!");
    }


    // File Creation

 if (!fs.existsSync(fileToCreate)) { 
    fs.writeFile(
        path.join(__dirname, folderName, fileName),
        '<h1>Hello World2!</h1>',
        err => {
          if (err) throw console.log('file error');;
          console.log('File written to...')
        });
    } else {
        console.log("SORRY .... The file exists already !!! ");
    }


}

module.exports = {
    createFile,
}