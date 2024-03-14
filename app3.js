var express = require('express');
var url = require('url');
var app = express();

app.get('/circle_area', function(req, res) {
    var q = url.parse(req.url, true).query;
    var radius = parseInt(q.radius);
    
    if (isNaN(radius)) {
        res.send("<h1 style='color:red;'>Invalid radius. Please provide a valid number.</h1>");
        return;
    }

    var area = Math.PI * Math.pow(radius, 2);
    res.send("<h1 style='color: green; background-color: lightgreen;'>Area of Circle: " + area.toFixed(2) + "</h1>");
});

app.listen(7000);
console.log("App is running on http://localhost:7000");
