const express = require("express");
const router = express.Router();
const videoController = require('../controllers/videoController')

router.post("/upload-video", videoController.uploadVideo)

module.exports = router;
