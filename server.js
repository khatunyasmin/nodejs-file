// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 5000;

// const nodeserver = http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader("content-Type","text/html");
//     res.end("<u>Hello everyone!</u>")
// });

// nodeserver.listen(port,hostname,()=>{
//     console.log("Server is Running.");
// })

var http = require("http");
 
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
 
    res.write('<h1> Hello World!');
    res.end('<br><h2> GoodBye!!!');
}).listen(5000);
 
console.log("Server Running!!!");






