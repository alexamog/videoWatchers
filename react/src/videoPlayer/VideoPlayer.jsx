import ReactPlayer from 'react-player';
export default function VideoPlayer({videoURL}){
        return (
            <div className='player-wrapper'>
                <ReactPlayer url={videoURL}
   controls />
            </div>
        )
}