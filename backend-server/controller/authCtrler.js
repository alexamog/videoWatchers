import { db } from "../db.js"

export const register = (req,res)=>{
    //check if user exists
    const lookForUser = "SELECT * FROM videousers WHERE email = ?"

    db.query(lookForUser, [res.body.email], (err,result)=>{
        if(err) return res.json(err);
        if(result.length) return res.status(409).json("This user already exists.");

        //create user if does not exist
        const createUser = "INSERT INTO videousers(`user_email`, `user_username`, `user_password`, `user_firstName`, `user_lastName`) VALUES (?)"
        const userValues = [
            req.body.email,
            req.body.username,
            req.body.password,
            req.body.firstName,
            req.body.lastName,
        ]
    })

}

export const login = (req,res)=>{

}

export const logout = (req,res)=>{
    
}