import './relatedVideos.css'

const RelatedVideos =(props)=>{
    return(
        <div className="related-videos-container">
            <div className="related-videos">
                <div className ="video-title">
                    <h4>video title</h4>
                </div>
                <div className="video-snippet">
                    <img src="https://th.bing.com/th/id/OIP.pwOAccjHg9pAH4M29vpCsAHaEo?w=263&h=180&c=7&o=5&dpr=1.25&pid=1.7" alt="picture"  height="150px" width="300px" />
                </div>
                <div className="video-description">
                    <p>this is a description</p>
                </div>
            </div>
            <div className="related-videos">
                <div className ="video-title">
                    <h4>video title</h4>
                </div>
                <div className="video-snippet">
                    <img src="https://th.bing.com/th/id/OIP.pwOAccjHg9pAH4M29vpCsAHaEo?w=263&h=180&c=7&o=5&dpr=1.25&pid=1.7" alt="picture" height="150px" width="300px"/>
                </div>
                <div className="video-description">
                    <p>this is a description</p>
                </div>
            </div>
            <div className="related-videos">
                <div className ="video-title">
                    <h4>video title</h4>
                </div>
                <div className="video-snippet">
                    <img src="https://th.bing.com/th/id/OIP.pwOAccjHg9pAH4M29vpCsAHaEo?w=263&h=180&c=7&o=5&dpr=1.25&pid=1.7" alt="picture"  height="150px" width="300px"/>
                </div>
                <div className="video-description">
                    <p>this is a description</p>
                </div>
            </div>

        </div>
    )
}
export default RelatedVideos;