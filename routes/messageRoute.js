const express = require("express");
const router = express.Router();
const { send } = require("../controllers/messageController");

router.post("/message", send);

module.exports = router;
