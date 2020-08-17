const {createServer} = require('http');

function serv(req,res){
    res.write('Hello World');
    res.end();
}

let server = createServer(serv);
server.listen(8080, () => console.log('server listening ...'));
