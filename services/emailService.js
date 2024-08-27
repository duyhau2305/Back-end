const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'Gmail', // hoặc 'smtp.gmail.com'
    auth: {
        type: 'OAuth2',
        user: 'your-email@gmail.com',
        clientId: 'your-client-id',
        clientSecret: 'your-client-secret',
        refreshToken: 'your-refresh-token',
        accessToken: 'your-access-token',
    },
});

let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@gmail.com',
    subject: 'Test Email',
    text: 'Hello world!',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});

// Cấu hình cho Outlook
const outlookTransporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.OUTLOOK_USER,
    pass: process.env.OUTLOOK_PASS
  }
});

// Hàm gửi email
const sendEmail = async (to, subject, text) => {
  let transporter;
  if (to.endsWith('@gmail.com')) {
    transporter = gmailTransporter;
  } else if (to.endsWith('@outlook.com') || to.endsWith('@hotmail.com')) {
    transporter = outlookTransporter;
  } else {
    throw new Error('Email provider not supported.');
  }

  const mailOptions = {
    from: transporter.options.auth.user,
    to: to,
    subject: subject,
    text: text
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
