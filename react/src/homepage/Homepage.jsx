import { useNavigate } from "@tanstack/react-location";
import { useStore } from "../store";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import { useState } from "react";

export default function Homepage() {
    const navigate = useNavigate();
    const token = useStore((state) => state.token);
    const profile = useStore((state) => state.profile);
    const [videoPlayer, setVideoPlayer] = useState({
        currentState: true,
        text: ["Watch videos!", "Close video player"]
    });
    console.log(profile)
    if (token) {
        return (<div>
            <h1>Welcome {profile.first} {profile.last} </h1>

            <div>
                <button onClick={() => {
                    navigate({ to: "/upload", replace: true });
                }}>Upload a video!</button>

                <button onClick={() => {
                    setVideoPlayer({ ...videoPlayer, currentState: !videoPlayer.currentState });
                }}>
                    {videoPlayer.text[+videoPlayer.currentState]}
                </button>

                {
                    videoPlayer.currentState &&
                    <div>
                        <VideoPlayer videoURL={"https://www.youtube.com/watch?v=mbsmsi7l3r4"} />
                    </div>
                }
            </div>
        </div>)
    }
    else {
        return (<div>
            <h1>Welcome to the homepage</h1>
            <button onClick={() => {
                navigate({ to: "login", replace: true });
            }}>Login</button>
            <button onClick={() => {
                navigate({ to: "register", replace: true });
            }}>Register</button>
        </div>
        )
    }
}
