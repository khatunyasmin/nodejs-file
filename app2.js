var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/calculatePercentage', function(req, res) {
    var student1Marks = parseInt(req.body.student1Marks);
    var student2Marks = parseInt(req.body.student2Marks);
    var student3Marks = parseInt(req.body.student3Marks);
    var student4Marks = parseInt(req.body.student4Marks);
    var student5Marks = parseInt(req.body.student5Marks);

    // Calculate average percentage
    var totalMarks = student1Marks + student2Marks + student3Marks + student4Marks + student5Marks;
    var averagePercentage = totalMarks / 5;

    res.send("<h1 style='color:blue;background-color:red;'> Average Percentage: " + averagePercentage.toFixed(2) + "%</h1>");
});

app.listen(7000);
console.log("App is running on http://localhost:7000");
