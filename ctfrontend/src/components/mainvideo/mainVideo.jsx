// import { PromiseProvider } from 'mongoose';
import { disconnect } from 'process'
import { useState } from 'react'
import './mainvideo.css'
const MainVideo =(props)=>{

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
                <h3>Comments:</h3>
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
                                    <div>
                                    </div>
                                    <div className="comment-buttons">
                                        <div className="comment-text">
                                            <h5>{comment.text}</h5>
                                        </div>
                                        <div className="ld">
                                            <button onClick={()=>handleLike(comment._id)}>Comment Likes: {comment.likes}</button>
                                            <button onClick={()=>handleDislike(comment._id)}>Comment Dislikes: {comment.dislikes}</button>
                                        </div> 
                                    </div>
                                    <div>
                                        {comment.replies.map((reply)=>{
                                            return(
                                                <div>
                                                    <div className="reply-title">
                                                        <h5>Reply</h5>
                                                    </div>
                                                    <div className="reply-text">
                                                        {reply.text}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <div className="reply-box">
                                        <textarea name="reply" placeholder="Enter a reply" id="" cols="75" rows="2" onChange={handleChange}></textarea>
                                        <button onClick={()=>handleClick(comment._id)}>Submit reply</button>
                                    </div>
                                </div>
                                <hr className="hrClass"/>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default MainVideo;