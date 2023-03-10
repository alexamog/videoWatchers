import { useState } from "react"
import { useNavigate } from "@tanstack/react-location";
import { useStore } from "../store";
import HomePage from "../homepage/Homepage"
import axios from 'axios';

export default function Login() {
    const token = useStore((state) => state.token);
    const navigate = useNavigate();
    const setAuth = useStore((store) => store.authentication);
    const setProfile = useStore((store) => store.setProfile);
    const [loginData, setLoginData] = useState({
        "email": null,
        "password": null
    });
    const setPost = async (data) => {
        const res = await axios.post('http://localhost:3001/auth/login', data)
            .then(function (response) {
                if (response.data.token == "token_here") {
                    setProfile({ 
                        ...response.data.profileInfo
                    });
                    setAuth(response.data.token);

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleClick = (e) => {
        e.preventDefault();
        setPost({...loginData })
        navigate({ to: "/homepage", replace: true })

    };
    if (token) {
        return <HomePage />
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <label>Email: </label>
                <input type='email' onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                <label>Password: </label>
                <input type='password' onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                <button onClick={handleClick} type='submit'>Submit</button>
            </form>
        </div>
    )
}