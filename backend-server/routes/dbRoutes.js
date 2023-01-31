// const db = require("../db");
const express = require("express");
const router = express.Router();
const path = require('path');


const registerUser = async (email, password) => {

    let userResult = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (userResult === null) {
        await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })
        return true;
    }
    return false;
};
router.post("/auth", (req,res)=> {
    const username = req.body.email;
    const pass = req.body.password;
    const sqlFind = "SELECT * FROM videousers WHERE 'User' = 'username' AND 'User_Password' = 'pass'"
    db.query(sqlFind, [username, pass], (err, res)=>{
        if (err) throw err;
            console.log("User And/Or Password not found.")
        console.log("Login Sucessful.")
    })
});

router.post("/upload", (req,res)=>{
    const username = req.body.email;
    const title = req.body.title;
    const text = req.body.text;
    const sqlInsert = "INSERT INTO videos(Title, Video_Path) VALUES (title, text);"
    db.query(sqlInsert, [title, text], (err, res)=>{
      if (err) throw err;
      console.log("Video uploaded.");
    });
    console.log(req.body);
    
});

router.get("/video", (req,res) => {
    const vidId = req.body.id;
    const title = req.body.title;
    const sqlSelect = "SELECT * FROM videos WHERE 'Title' = 'title' AND 'Video_ID' = 'vidId';"
    db.query(sqlSelect, [vidId,title], (err, res)=>{
        if (err) throw err;
        console.log(res.body)
        
    });
    
  })
// router.get("/", (req, res, next) => {
//     res.send("API is working properly");
// });

module.exports = router;