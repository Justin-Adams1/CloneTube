import './mainvideo.css'
const MainVideo =(props)=>{
    return(
        <div className="container">
            <div className="title-video">
                <h2>Video Title</h2>
            </div>
            <div className="videos">
            <iframe id="ytplayer" type="text/html" width="800" height="400"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                frameborder="0">
                </iframe>
            </div>
        </div>
    )
}
export default MainVideo;