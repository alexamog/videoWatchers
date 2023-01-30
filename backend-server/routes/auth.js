const express = require("express");
const router = express.Router();
const path = require('path');


router.post("/login", (req, res, next) => {
    console.log(req.body)
    const email = req.body.email;
    const passwd = req.body.password;
    
    if(passwd == "123"){
        res.send("token_here");
    }
});

module.exports = router;