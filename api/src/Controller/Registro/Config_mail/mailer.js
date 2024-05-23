const nodemailer = require('nodemailer');
const { MAIL_CLUB, APP_KEY_MAIL } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for other ports
  auth: {
    user: MAIL_CLUB,
    pass: APP_KEY_MAIL,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error configuring transporter:', error);
  } else {
    console.log('Mail transporter configured:', success);
  }
});

module.exports = { transporter };
