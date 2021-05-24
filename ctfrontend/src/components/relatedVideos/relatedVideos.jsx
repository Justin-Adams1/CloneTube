import './relatedVideos.css'

const RelatedVideos =(props)=>{

    const handleClick=(videoId)=>{
        props.changeVideo(videoId)
    }

    return(
        <div className="relatedVideos">
            <div>
                <h2 className="relatedHeader">Related Videos</h2>
            </div>
            <div>
                {props.relatedVideos.map((relatedvideo)=>{
                    return(
                        <div onClick={()=>handleClick(relatedvideo.id.videoId)} className="related-video-card">
                            <div className="relatedVideoTitle">
                                <p>{relatedvideo.snippet.title}</p>
                                <img src={relatedvideo.snippet.thumbnails.medium.url} alt="thumbnails"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default RelatedVideos;