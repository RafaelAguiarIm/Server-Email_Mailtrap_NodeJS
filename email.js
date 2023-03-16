const nodemailer = require('nodemailer');

const user = 'Usuario do Mailtrap';
const pass = 'senha do Mailtrap';

module.exports = nodemailer.createTransport({
  // host: 'live.smtp.mailtrap.io',
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user,
    pass }
});