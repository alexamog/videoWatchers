import { useState } from "react"

export default function Register(){
    const [loginData, setLoginData] = useState({
        "email": "",
        "password": ""
    });

    const handleClick = (e) =>{
        e.preventDefault();
    };
    
    return(
        <div>
            <h1>Register Page</h1>
                <form>
                    <label>Email: </label>
                    <input onChange={(e)=>setLoginData({...loginData, email: e.target.value})}/>
                    <label>Password: </label>
                    <input onChange={(e)=>setLoginData({...loginData, password: e.target.value})}/>
                    <button onClick={handleClick} type='submit'>Submit</button>
                </form>
        </div>
    )
}