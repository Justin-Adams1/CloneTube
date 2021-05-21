import './relatedVideos.css'

const RelatedVideos =(props)=>{

    const handleClick=(videoId)=>{
        props.changeVideo(videoId)
    }

    return(
        <div className="relatedVideos">
            <div>
                {props.relatedVideos.map((relatedvideo)=>{
                    return(
                        <div onClick={()=>handleClick(relatedvideo.id.videoId)}>
                            <div>
                                {relatedvideo.snippet.title}
                            </div>
                            <div>
                                <img src={relatedvideo.snippet.thumbnails.default.url} alt="thumbnails" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default RelatedVideos;