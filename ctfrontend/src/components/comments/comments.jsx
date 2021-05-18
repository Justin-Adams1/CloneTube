import './comments.css';
import Replies from '../replies/replies'

const Comments = (props)=>{
    return(
        <div className="container">
            <div className="comment-box">
                <textarea name="comments" id="" cols="75" rows="5" placeholder="Enter a comment"></textarea>
                </div>
                <div className="replyButton">
                <button>Submit comment</button>
            </div>
            <div className="replies">
                <Replies/>
            </div>
        </div>
    )
}

export default Comments;