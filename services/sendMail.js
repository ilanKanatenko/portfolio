import nodemailer from "nodemailer";

const sendMail = async () => {
  // create reusable transporter object using the default SMTP transport
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "ilankanatenko@gmail.com", // sender address
    to: "ilan6098005@gmail.com", // list of receivers
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  });
  console.log(info);
};
console.log("server send mail");
sendMail();
