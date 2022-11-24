//Requerimos el paquete
var nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')

const main = async (req, res) => {
  const { email } = req.query

  const auth = {
    auth: {
      api_key: 'cd1f10113c438a6517a3bf6da108aacf-69210cfc-7346b2c0',
      domain: 'sandboxa905d0a1e0ec414bb42cb804d3a3909d.mailgun.org', // one of your domain names listed at your https://app.mailgun.com/app/sending/domains
    },
  }

  var message = `Password reminder
  It seems you havenc8.68games@gmail.comrd
  The link will expire in 24 hours, so better click it fast!
  If you haven't requested this email, please ignore it.
  If the button above doesn't work, copy and paste the
  following URL into your browser:
  https://nccgames.ml/passwordreset/ejemplo@gmail.com/
  Thank you.`

  const nodemailerMailgun = nodemailer.createTransport(mg(auth))

  nodemailerMailgun.sendMail(
    {
      from: 'myemail@example.com',
      to: 'gandhycoder@gmail.com', // An array if you have multiple recipients.
      cc: 'gnocere@gmail.com',
      bcc: 'feco99@yahoo.com',
      subject: 'Password Reset',
      replyTo: 'nc8.68games@gmail.com',
      //You can use "html:" to send HTML email content. It's magic!
      html: '<b>Wow Big powerful letters</b>',
      //You can use "text:" to send plain-text content. It's oldschool!
      text: message,
    },
    (err, info) => {
      if (err) {
        console.log(`Error: ${err}`)
      } else {
        console.log(`Response: ${info}`)
      }
    }
  )

  //   let testAccount = await nodemailer.createTestAccount()

  console.log({
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass, // generated ethereal password
  })

  //   // create reusable transporter object using the default SMTP transport
  //   let transporter = nodemailer.createTransport({
  //     host: 'smtp.ethereal.email',
  //     port: 587,
  //     secure: false, // true for 465, false for other ports
  //     auth: {
  //       user: testAccount.user, // generated ethereal user
  //       pass: testAccount.pass, // generated ethereal password
  //     },
  //   })

  //Creamos el objeto de transporte para gmail // no funciona por lo pronto
  // var transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'nc8.68games@gmail.com',
  //     pass: 'ncgames868',
  //   },
  // })

  //   var mailOptions = {
  //     from: '"ncgames" <nc8.68games@gmail.com>',
  //     to: email,
  //     subject: 'Password Reset',
  //     text: message,
  //     html: '<b>Hello world?</b>', // html body
  //   }

  //   // send mail with defined transport object
  //   let info = await transporter.sendMail(mailOptions)

  //   console.log('Message sent: %s', info.messageId)
  //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //   // Preview only available when sending through an Ethereal account
  //   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  //   console.log('info', info)

  res.json({ message: 'mensaje enviado a: ' + email })
}

module.exports = main
