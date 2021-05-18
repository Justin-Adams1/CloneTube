import './replies.css'

const Replies =()=>{
    return(
        <div>
            <div className="reply-box">
                <textarea name="reply" placeholder="Enter a reply" id="" cols="75" rows="5"></textarea>
                <button>Submit reply</button>
            </div>
        </div>
    )
}

export default Replies;