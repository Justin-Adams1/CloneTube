import './comments.css';
import Replies from '../replies/replies'

const Comments = (props)=>{
    return(
        <div className="container">
            <div className="buttons">
                <button>Like</button>
                <button>Dislike</button>
            </div>
            <div className="comment-box">
                <textarea name="comments" id="" cols="100" rows="10" placeholder="Enter a comment"></textarea>
                <button>Submit comment</button>
            </div>
            <div className="replies">
                <Replies/>
            </div>
        </div>
    )
}

export default Comments;