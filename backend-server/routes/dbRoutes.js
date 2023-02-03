// const db = require("../db");
const dbController = require("../controller/dbCtrler");
const express = require("express");
const router = express.Router();
const path = require('path');

router.post("/upload", dbController.uploadVideo);
router.get("/videos", dbController.getVideos);



module.exports = router;