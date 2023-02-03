import { useNavigate } from "@tanstack/react-location";
import { useState } from "react";
import { useStore } from "../store";
import VideoPlayer from "../videoPlayer/VideoPlayer";
export default function ButtonControl() {
    const navigate = useNavigate();
    const video = useStore((state) => state.currentVideo);
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
                    <VideoPlayer videoURL={video.videoURL} />
                </div>
            }
        </div>
    )
}