const nodemailer = require('nodemailer');


module.exports = function (req, res, next) {
    // Implement the middleware function based on the options object
    var mailDetails = req.body
    console.log(mailDetails.name);

    nodemailer.createTestAccount((err, account) => {
      let transporter = nodemailer.createTransport({
          host: 'smtp.googlemail.com', // Gmail Host
          port: 465, // Port
          secure: true, // this is true as port is 465
          auth: {
              user: 'gbharani5@gmail.com', //Gmail username
              pass: 'Il0ve@pple' // Gmail password
          }
      });
   
      let mailOptions = {
          from: mailDetails.email,
          to: 'barunitsolutions@gmail.com', // Recepient email address. Multiple emails can send separated by commas
          subject: mailDetails.msg_subject,
          text: 'Message is from '+ mailDeatils.name + mailDetails.email+ '\n' + mailDetails.message
      };
   
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
      });
  })   

    res.send('success')
  }