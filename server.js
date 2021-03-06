const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const messageRoute = require("./routes/messageRoute");
const port = process.env.PORT || 5000;
require("dotenv").config();

const app = express();

app.use(bodyparser.json());

mongoose
	.connect(process.env.MONGO, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log("DB connected"))
	.catch((err) => console.log(err));

app.use("/", express.static("client1/build"));

app.listen(port, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`running on port ${port}`);
	}
});

app.use(messageRoute);
