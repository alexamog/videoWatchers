import { useNavigate } from "@tanstack/react-location";
import { useState } from "react"
import Homepage from "../homepage/Homepage";
import { useStore } from "../store";
import VideoUpload from "../videoUpload/VideoUpload";
import axios from 'axios';

export default function Login(){
    const navigate = useNavigate();
    const token = useStore((state)=> state.token);
    const setAuth = useStore((store)=> store.authentication);
    const [loginData, setLoginData] = useState({
        "email": "",
        "password": ""
    });
    
    const setPost = async (data) =>{
        const res = await axios.post('http://localhost:3001/auth/login', data)
        .then(function (response) {
            if(response.data == "token_here"){
                setAuth(response.data);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    

    const handleClick = (e) =>{
        e.preventDefault();
        // console.log(loginData)
        if(loginData.password == "123" && loginData.email == "aamog@my.bcit.ca"){
            setPost({"password": loginData.password, "email": loginData.email})
        }
    };
    

    if(token){
        return <Homepage/>
      }
    return(
        <div>
            <h1>Login Page</h1>
                <form>
                    <label>Email: </label>
                    <input type='email' onChange={(e)=>setLoginData({...loginData, email: e.target.value})}/>
                    <label>Password: </label>
                    <input type='password' onChange={(e)=>setLoginData({...loginData, password: e.target.value})}/>
                    <button onClick={handleClick} type='submit'>Submit</button>
                </form>
        </div>
    )
}