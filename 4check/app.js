var nodemailer = require('nodemailer'); 

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'user@gmail.com',
    pass: 'pass'
  }
});

var mailOptions = {
  from: 'pepe@pepe.com',
  to: 'carlosmaccarrone@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
