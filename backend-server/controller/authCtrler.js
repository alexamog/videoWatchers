import { db } from "../db.js"

export const register = (req,res)=>{
    //check if user exists
    const lookForUser = "SELECT * FROM videousers WHERE user_email = ? OR user_username = ?";

    db.query(lookForUser, [res.body.email], (err,result)=>{
        if(err) return res.json(err);
        if(result.length) return res.json("This user already exists.");

        //create user if does not exist
        const createUser = "INSERT INTO videousers(`user_email`, `user_username`, `user_password`, `user_firstName`, `user_lastName`) VALUES (?)"
        const userValues = [
            req.body.email,
            req.body.username,
            req.body.password,
            req.body.firstName,
            req.body.lastName
        ];
        db.query(createUser, [userValues], (err, result)=>{
                if (err) return res.json(err);
                return res.json("User has been created.")
        });
    });

};

export const login = (req,res)=>{
    //check user
    const getUser = "SELECT * FROM videousers WHERE user_email = ?";

    db.query(getUser, [req.body.email], (err, result) => {
        if (err) return res.json(err);
        if (result.length === 0) return res.json("User not found.");
        //check password
        if (res.body.password !== result[0].user_password) return res.json("Email or Password are incorrect.");

    });

};

export const logout = (req,res)=>{
    
}