var http=require("http");
http.createServer(function(req,res){
res.writeHead(300,{'content-type':'text/html'});
res.write('<h1>Hello Yasmin Khatun<h1/>');
res.end('<br> <h2>Good Bye!');

}).listen(5000);

console.log("surver Running !!!");