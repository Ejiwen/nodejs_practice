// const {createServer} = require('http');

const fileOperation = require('./utils/file_utils.js');

fileOperation.createFile("files",'test2.html');

// function serv(req,res){
//     res.write('Hello World',req);
//     res.end();
// }

// let server = createServer(serv);
// server.listen(8080, () => console.log('server listening ...'));