// Nodemailer is a module for sending emails from Node.js applications.
// Example: Sending an email using nodemailer

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'geddasaikrishna@gmail.com',
        pass: 'gwlnslqngyygdjxj'
    }
});

const mailOptions = {
    from: 'geddasaikrishna@gmail.com',
    to: 'saigedda@virtusa.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email from Node.js.'
};

transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
        console.error(error);
    }else{
        console.log('Email sent:', info.response);
    }
});