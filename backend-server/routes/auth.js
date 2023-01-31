const express = require("express");
const router = express.Router();
const path = require('path');

const mockupDB = [
    {
        "email": "aamog@my.bcit.ca",
        "password": "123",
        "firstName": "Alex",
        "lastName": "Amog"
    },
    {
        "email": "xubryan123@gmail.com",
        "password": "123",
        "firstName": "Bryan",
        "lastName": "Xu"
    },
]

router.post("/login", (req, res, next) => {
    console.log(req.body)
    const email = req.body.email;
    const passwd = req.body.password;
    console.log(req.body)
    mockupDB.filter((acc) => {
        if (acc.email == email && acc.password == passwd) {
            return res.send({
                "token": "token_here",
                "profileInfo": {
                    "firstName": acc.firstName,
                    "lastName": acc.lastName
                }
            });
        }
    })
});

module.exports = router;