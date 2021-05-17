import { PromiseProvider } from 'mongoose';
import './mainvideo.css'
const MainVideo =(props)=>{
    return(
        <div className="container">
            <div className="title-video">
                <h2>Video Title</h2>
            </div>
            <div className="videos">
            <iframe id="ytplayer" type="text/html" width="800" height="400"
                src={props.videoRef}
                frameborder="0">
                </iframe>
            </div>
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </div>
    )
}
export default MainVideo;