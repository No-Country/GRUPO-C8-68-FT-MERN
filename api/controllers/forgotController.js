//Requerimos el paquete
var nodemailer = require('nodemailer')
require('dotenv').config()

GMAIL_PASS = process.env.GMAIL_PASS

const main = async (req, res) => {
  const { email } = req.params
  console.log('email', email)

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'nc8.68games@gmail.com', // generated ethereal user
      pass: GMAIL_PASS, // esta contraseña se genera en google en app passwords no es la del correo
    },
  })

  var message = `<h3>Password reset</h3>
  <p>It seems you have forgotten your password. No
  worries, just click the link below to get a new one:</p>
  <a href="https://nccgames.ml/passwordreset/${email}/">Get new password</a>
  <p>The link will expire in 24 hours, so better click it fast!
  <p>If you haven't requested this email, please ignore it.</p>
  <p>If the button above doesn't work, copy and paste the
  following URL into your browser:</p>
    <i>https://nccgames.ml/passwordreset/${email}/</i>
    <p>Thank you.</p>`

  var mailOptions = {
    from: '"ncgames" <nc8.68games@gmail.com>',
    to: email,
    subject: 'Password Reset',
    // text: message,
    html: message, // html body
  }

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  console.log('info', info)

  res.json({ message: 'mensaje enviado a: ' + email })
}

module.exports = main
