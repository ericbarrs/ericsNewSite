const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const messageRoute = require("./routes/messageRoute");
const port = process.env.PORT || 5000;
const path = require('path')

const app = express();

app.use(bodyparser.json());

mongoose
  .connect(
    process.env.MONGO || "mongodb://eric:eric1234@ds115798.mlab.com:15798/ericswebsitetest",
    { useNewUrlParser: true }
  )
  .then(console.log("DB connected"))
  .catch(err => console.log(err));

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`running on port ${port}`);
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'client1', 'build', 'index.html'))
})


app.use(messageRoute);
app.use(express.static("client1/build"));
