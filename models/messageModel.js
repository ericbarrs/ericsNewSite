const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  subject: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Message = mongoose.model("message", messageSchema);
