const authController = require("../controller/authCtrler.js");

const express = require("express");
const router = express.Router();


// const mockupDB = [
//     {
//         "username": "bleulenny",
//         "email": "aamog@my.bcit.ca",
//         "password": "123",
//         "firstName": "Alex",
//         "lastName": "Amog"
//     },
//     {
//         "username": "bryanxu",
//         "email": "xubryan123@gmail.com",
//         "password": "123",
//         "firstName": "Bryan",
//         "lastName": "Xu"
//     },
// ]
router.post("/login", authController.login);

module.exports = router;