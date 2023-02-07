import { useStore } from "../store"
export default function VidPreview({ videoPicture, videoURL, videoTitle }) {
    const setVideo = useStore((store) => store.setVideo);
    const video_info = {
        "url": videoURL,
        "title": videoTitle,
        "picture": videoPicture
    }
    return (
        <div>
            <p>{videoTitle}</p>
            <img src={videoPicture}
                onClick={()=>setVideo({...video_info})}
            />
        </div>
    )
}