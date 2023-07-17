var nodeemailer = require('nodemailer')

var transporter = nodeemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'madeagusandi446@gmail.com',
        pass: '###HelloWorldnamasayaMadeAgusAndiGunawan4461w2a3s4d5f6g7h8j9k0l10x2xyzqwerty'
    }
});

var mailOptions = {
    from: 'madeagusandi446@gmail.com',
    to: 'made.118320008@student.itera.ac.id',
    subject: 'Uji coba',
    test: 'email tester dengan node js'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email terkirim ' + info.response)
    }
})