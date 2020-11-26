const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

// Body Parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api route
app.post('/api/send', (req, res) => {
	console.log(req.body);
	const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

	console.log(process.env.ACCOUNT);
	console.log(process.env.CLINENTID);
	console.log(process.env.CLINENTSECRET);
	console.log(process.env.REFRESHTOKEN);

	// create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		secure: true,
		auth: {
			type: 'OAuth2',
			user: process.env.ACCOUNT,
			clientId: process.env.CLINENTID,
			clientSecret: process.env.CLINENTSECRET,
			refreshToken: process.env.REFRESHTOKEN,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	// setup email data with unicode symbols
	let mailOptions = {
		from: process.env.ACCOUNT, // sender address
		to: 'digilau@gmail.com', // list of receivers
		subject: 'Portfolio Contact Request', // Subject line
		text: 'New Response', // plain text body
		html: output, // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: %s', info.messageId);

		res.render('contact', { msg: 'Your information has been sent' });
	});
});

if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));

	// Handle React routing, return all requests to React app
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));
