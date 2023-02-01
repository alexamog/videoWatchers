// const db = require("../db");
const express = require("express");
const router = express.Router();
const path = require('path');

router.post("/upload", (req, res) => {
    const video_title = req.body.videoName;
    const username = req.body.username;
    const video_tags = req.body.file_tags

    const sqlInsert = "INSERT INTO videos(title, video_path, user, tags) VALUES ?;"
    db.query(sqlInsert, [video_title, $`http://localhost:5000?title=${video_title}`, username, video_tags], (err, res) => {
        if (err) res.send(err)
        console.log("Video uploaded.");
    });
    res.send(200);
});

router.get("/video", (req, res) => {
    const title = req.body.title;
    const user = req.body.username;
    const sqlSelect = "SELECT video_path FROM videos WHERE 'Title' = '?' AND 'user' = '?';"
    db.query(sqlSelect, [title, user], (err, res) => {
        if (err) throw err;
        console.log(res.body)
    });
    res.send(200)
})

module.exports = router;