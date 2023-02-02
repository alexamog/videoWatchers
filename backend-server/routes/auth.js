import { register,login,logout } from "../controller/authCtrler.js"

const express = require("express");
const router = express.Router();
const path = require('path');
const conn = require("../db")

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
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);




module.exports = router;