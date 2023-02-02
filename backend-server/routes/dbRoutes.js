// const db = require("../db");
import { uploadVideo, getVideos } from "../controller/dbCtrler.js";
const express = require("express");
const router = express.Router();
const path = require('path');

router.post("/upload", uploadVideo);
router.get("/videos", getVideos);



module.exports = router;