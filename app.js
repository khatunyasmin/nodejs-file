var express = require('express');

var url = require('url');

var app = express();


app.get('/si',function(req,res){
    var q = url.parse(req.url,true).query;//query fillup q represented query
    var principal = parseInt(q.principal);
    var rate = parseInt(q.rate);
    var time = parseInt(q.time);
    var si = principal*rate*time/100;
    var amount = principal + si;
    res.send("<h1 style='color:blue;background-color:deepskyblue;'> SI :" + si + "<br> Amount : " + amount)
})


app.listen(7000);
console.log("App is running on http://localhost:7000");