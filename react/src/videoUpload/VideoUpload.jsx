import { useNavigate } from "@tanstack/react-location";
import axios from "axios";
import { useState } from "react";
import { useStore } from "../store";
import Login from "../login/Login";

export default function VideoUpload() {
  const navigate = useNavigate();
  const token = useStore((state) => state.token);
  const profile = useStore((state) => state.profile);
  const [formData, setFormData] = useState({
    "videoName": "untitled",
    "tags": [],
    "videoFile": null,
  });

  const setPost = async () => {
    const bodyFormData = new FormData();
    bodyFormData.append("videoName", formData.videoName);
    bodyFormData.append("videoFile", formData.videoFile);
    console.log(FormData);
    const res = await axios.post("http://localhost:5000/", bodyFormData)
      .then((resp) => {
        return resp.status;
      })
      .catch((error) => {
        console.log(error);
      });
    if (res == 200) {
      const payload = {
        "videoName": formData.videoName,
        "videoFile": formData.videoFile.name,
        "tags": formData.tags,
        "username": profile.username
      }
      const appendDB = await axios.post("http://localhost:3001/db/upload", payload)
        .then((resp) => {
          console.log(resp)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    await setPost({
      "videoName": formData.videoName, "videoFile": formData.videoFile.name, "username": profile.username
    });
    navigate({ to: "/", replace: true });

  }

  if (token != "token_here") {
    return <Login />
  }
  return (
    <div>
      <h1>Upload a video here</h1>
      <form>
        <label>Name: </label><input
          type="text"
          placeholder="Name of video"
          onChange={(e) => setFormData({ ...formData, videoName: e.target.value })}
        />
        <br />
        <label>File: </label>
        <input type='file' onChange={(e) =>
          setFormData({ ...formData, videoFile: e.target.files[0] })
        } />
        <br />
        <label>Tags: </label>
        <input placeholder="Separate by commas" onChange={(e) => {
          setFormData({ ...formData, tags: e.target.value.split(",").map(tag => tag.trim()) })
        }} />
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}