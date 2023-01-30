// const db = require("../db");
const express = require("express");
const router = express.Router();
const path = require('path');


router.post("/upload", (req,res)=>{
    const username = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;
    console.log(req.body);
    res.send("Route hit.")
})

// router.get("/", (req, res, next) => {
//     res.send("API is working properly");
// });

module.exports = router;