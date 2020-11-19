const Message = require("../models/messageModel.js");
const Nexmo = require("nexmo");
require("dotenv").config();

module.exports.send = (req, res) => {
	const { phone, subject, text } = req.body;
	const newMessage = new Message({
		subject,
		phone,
		text,
	});
	const nexmo = new Nexmo({
		apiKey: process.env.NEXMO_API,
		apiSecret: process.env.NEXMO_SECRET,
	});
	const from = process.env.NEXMO_FROM;
	const to = process.env.NEXMO_TO;
	newMessage
		.save()
		.then(() =>
			nexmo.message.sendSms(
				from,
				to,
				`From Nexmo\nPhone:${phone}\nSubject: ${subject}\n\n${text}\n  `
			)
		)
		.then(() => res.json({ message: "Message sent. Thank you" }));
};
