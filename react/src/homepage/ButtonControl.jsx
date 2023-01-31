import { useNavigate } from "@tanstack/react-location";
import { useState } from "react";
import VideoPlayer from "../videoPlayer/VideoPlayer";
export default function ButtonControl() {
    const navigate = useNavigate();
    const [videoPlayer, setVideoPlayer] = useState({
        currentState: true,
        text: ["Watch videos!", "Close video player"]
    });
    return (
        <div>
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
    )
}