const Message = require("../models/messageModel.js");

module.exports.send = (req, res) => {
  const newMessage = new Message({
    subject: req.body.subject,
    phone: req.body.phone,
    text: req.body.text
  });
  newMessage
    .save()
    .then(data => res.json({ message: "Message sent. Thank you" }));
};
