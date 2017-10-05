var express = require("express");
var nodemailer = require("nodemailer");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;


app.get("/", function (req, res) {
    console.log("GET req arrived")
        res.send("hello world")
});

app.use(methodOverride());
app.use(bodyParser());
//app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wtmp20@gmail.com',
    pass: 'walipowe20'
  }
});

const mailOptions = {
  from: 'wtmp20@gmail.com',
  to: 'wpowell321@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<p>That was easy!<p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log(info);
  }
});
