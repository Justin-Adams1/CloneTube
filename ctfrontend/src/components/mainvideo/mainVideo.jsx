// import { PromiseProvider } from 'mongoose';
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
            <div className="ld">
                <button>Like</button>
                <button>Dislike</button>
            </div> 
            <div>
                {props.comments.map((comment)=>{
                    if(comment.length===0){
                        <div>

                        </div>
                    }else{
                        return(
                            <div>
                                <div>
                                    {comment.text}
                                </div>
                                <div>
                                    <div className="reply-box">
                                        <textarea name="reply" placeholder="Enter a reply" id="" cols="75" rows="5"></textarea>
                                        <button>Submit reply</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default MainVideo;