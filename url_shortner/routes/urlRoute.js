const express = require("express");
const router = express.Router();
const generateUrl = require("../controller/urlController");

router.post('/url', generateUrl);

module.exports = router;