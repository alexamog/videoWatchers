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
    const setPost = (data) =>{
        axios({
            method: "post",
            url: "localhost:8080/video",
            data: {
                title: data.videoName,
                video: data.videoFile,
                tags: data.tags
            }
        })
    }
    
    const handleClick = async (e) =>{
        e.preventDefault();
        // await setPost(formData); //recieve location url
        // insertVideo()
        console.log(formData);
        
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

        </div>
    )
}