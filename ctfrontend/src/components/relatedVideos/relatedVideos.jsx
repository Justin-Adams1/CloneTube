import './relatedVideos.css'

const RelatedVideos =(props)=>{
    return(
        <div className="relatedVideos">
            <div>
                {props.relatedVideos.map((relatedvideo)=>{
                    return(
                        <div>
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