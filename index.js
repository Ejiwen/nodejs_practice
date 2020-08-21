const {createServer} = require('http');
const fs = require('fs');
const path = require('path');

function serv(req,res){

    let content = path.join(__dirname,"pages",
    req.url === '/' ? "home" : req.url);
    let extname = path.extname(content);

    let contentType = "text/html";

    switch (extname) {
        case('.css') : contentType = 'text/css';
        break;
        case('.js') : contentType = 'text/javascript';
        break;
        case('.jpg') : contentType = 'image/jpg';
        break;
        case("") : content = content+".html";
    }


    

    fs.readFile(content, (err,data) => {
        if(err) {
            res.writeHead(404,{'Content-Type': "text/html"});
            fs.readFile(path.join(__dirname,"pages","404.html"), (err,pg) => {
                res.end(pg);
            })
               
                
        } else {
            res.writeHead(200,{'Content-Type': contentType});
            res.end(data);
        }
        
    })
    

}


    let server = createServer(serv);
    server.listen(8080, () => console.log('server listening ...'));




// const fileOperation = require('./utils/file_utils.js');
// fileOperation.createFile("files",'test2.html');

// res.writeHead(404,{'Content-Type': contentType});
// res.end(
//     fs.readFile(path.join(__dirname,"pages","404.html"))
//     );