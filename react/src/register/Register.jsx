import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "@tanstack/react-location";

export default function Register(){
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        "email": "",
        "password": "",
        "username": "",
        "firstname": "",
        "lastname": ""
    });
    const setPost = async (data) => {
        const res = await axios.post('http://localhost:3001/auth/register', data)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleClick = (e) =>{
        e.preventDefault();
        console.log(loginData)
        setPost({
            "password": loginData.password, "email": loginData.email, "username": loginData.username, "firstname": loginData.firstname, "lastname": loginData.lastname
        })
        navigate({ to: "/login", replace: true })
    
    };
    
    return(
        <div>
            <h1>Register Page</h1>
                <form>
                    <label>Email: </label>
                    <input onChange={(e)=>setLoginData({...loginData, email: e.target.value})}/>
                    <label>Password: </label>
                    <input onChange={(e)=>setLoginData({...loginData, password: e.target.value})}/>
                    <label>Username: </label>
                    <input onChange={(e)=>setLoginData({...loginData, username: e.target.value})}/>
                    <label>First Name: </label>
                    <input onChange={(e)=>setLoginData({...loginData, firstname: e.target.value})}/>
                    <label>Last Name: </label>
                    <input onChange={(e)=>setLoginData({...loginData, lastname: e.target.value})}/>
                    <button onClick={handleClick} type='submit'>Submit</button>
                </form>
        </div>
    )
}