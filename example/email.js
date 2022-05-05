var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mandeez874@gmail.com',
    pass: '14789632abdi'
  }
});

var mailOptions = {
  from: 'mandeez874@gmail.com',
  to: 'abdirisaq874@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>aazaaaroooow waaaa lagu riiixaaa maalinkii shan jeeer doofaartaa  ahaydb wase, emailkan si automatic ah waaa laguugu soo diray, haku soo jawaaaaaaaaab celin fariintaadu mana soo gaareeso hadaa ku soo jawaab celiso!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});