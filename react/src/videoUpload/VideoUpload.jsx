import axios from "axios";
import mysql from 'mysql';
import { useState } from "react";
import { useNavigate } from "@tanstack/react-location";
import { useStore } from "../store";
import Login from "../login/Login";


export default function VideoUpload(){
    const token = useStore((state)=> state.token);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        "videoName": "untitled",
        "tags": [],
        "videoFile": null
    });
    const setPost = async (data) =>{
        const res = await axios.post('http://10.5.0.7:8080', data)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    const handleClick = async (e) =>{
        e.preventDefault();
        setPost(formData);
        // await setPost(formData); //recieve location url
        // insertVideo()
        // console.log(formData);
        
    }

    if(!token){
        return <Login/>
      }

    
    return(
        <div>
            <h1>Upload a video here</h1>
            <form>
            <label>Name: </label><input 
            type="text"
            placeholder="Name of video"
            onChange={(e)=>setFormData({...formData, videoName: e.target.value})}
            />
            <br/>
            <label>File: </label>
            <input type='file' onChange={(e) =>
                setFormData({ ...formData, videoFile: e.target.value })
              }/>
              <br/>
              <label>Tags: </label>
              <input placeholder="Separate by commas" onChange={(e)=>{
                setFormData({...formData, tags: e.target.value.split(",").map(tag=>tag.trim())})
              }}/>
            <button type="submit" onClick={handleClick}>Submit</button>
            </form>
            <form action="http://localhost:3001/db/upload" method="post">
            <input type="email" name="username"  id="exampleInputPassword1" placeholder="Password"/>
            <button type="submit">Submit</button>
                
            </form>
        </div>
    )
}