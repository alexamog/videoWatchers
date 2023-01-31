import ReactPlayer from 'react-player';
export default function VideoPlayer(){
        return (
            <div className='player-wrapper'>
                <ReactPlayer url={"http://localhost:5000/"}
   controls />
            </div>
        )
}