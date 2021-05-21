// import { PromiseProvider } from 'mongoose';
import { useState } from 'react'
import './mainvideo.css'
const MainVideo =(props)=>{

    const [likes, setlikes]=useState(0)
    const [text, setText]=useState('')

    const handleLike=(commentId)=>{
        props.likeAVideo(commentId)
    }

    const handleDislike=(commentId)=>{
        props.dislikeAVideo(commentId)
    }

    const handleChange = (event) => {
        setText(event.target.value);
      };

      const handleClick =(commentId)=>{
        const newReply={
            text: text
        }
        props.addAReply(newReply, commentId);
        setText('');
    }

    return(
        <div className="container">
            <div className="title-video">
                <h2>Video Title</h2>
            </div>
            <div className="videos">
            <iframe id="ytplayer" type="text/html" width="700" height="400"
                src={props.videoRef}
                frameborder="0">
                </iframe>
            </div>
            <div>
                {props.comments.map((comment)=>{
                    if(comment.length===0){
                        <div>

                        </div>
                    }else{
                        return(
                            <div>
                                <div key={comment._id}>
                                    {comment.text}
                                    <div className="ld">
                                        <button onClick={()=>handleLike(comment._id)}>Likes: {comment.likes}</button>
                                        <button onClick={()=>handleDislike(comment._id)}>Dislikes: {comment.dislikes}</button>
                                    </div> 
                                </div>
                                <div>
                                    {comment.replies.map((reply)=>{
                                        <div>
                                            {reply}
                                        </div>
                                    })}
                                </div>
                                <div>
                                    <div className="reply-box">
                                        <textarea name="reply" placeholder="Enter a reply" id="" cols="75" rows="5" onChange={handleChange}></textarea>
                                        <button onClick={()=>handleClick(comment._id)}>Submit reply</button>
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