import './comments.css';
import {useState} from 'react';

const Comments = (props)=>{
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
      };

    const handleClick =()=>{
        // let videoId = props.videoId
        const newComment={
            text: text
        }
        props.addNewComment(newComment);
        setText('');
    }

    return(
        <div className="container">
            <div className="comment-box">
                <textarea name="comments" id="" value={text} cols="75" rows="5" placeholder="Enter a comment" onChange={handleChange} ></textarea>
                </div>
                <div className="replyButton">
                <button onClick={handleClick}>Submit comment</button>
            </div>
        </div>
    )
}

export default Comments;