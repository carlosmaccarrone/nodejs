var nodemailer = require('nodemailer'); 

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'user@gmail.com',
    pass: 'pass'
  }
});

var mailOptions = {
  from: 'usted-mismo@misterio.com',
  to: 'carlosmaccarrone@gmail.com',
  subject: 'EL TÍTULO DEL EMAIL',
  text: 'Aquí puedo envíar texto o código html'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
