var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wtmp20@gmail.com',
    pass: 'walipowe20'
  }
});

const mailOptions = {
  from: 'wtmp20@gmail.com',
  to: 'wpowell20@gmail.com',
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