import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchBar from "./components/searchbar/searchBar";
import RelatedVideos from "./components/relatedVideos/relatedVideos";
import MainVideo from "./components/mainvideo/mainVideo";
import Comments from "./components/comments/comments";
import { Key } from "./key.js";
import { Container, Row, Col } from "react-bootstrap";
import SearchResults from "./videoResults";
import RelatedResults from "./relatedResults";

function App() {
  // const apiKEY = config.apiKEY
  const searchResults = SearchResults;
  const relatedResults = RelatedResults;
  const [videoId, setVideoId] = useState(SearchResults.items[0].id.videoId);
  const [comments, setComments] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [relatedVideos, getRelatedVideos] = useState(RelatedResults.items);
  // const apiKEY = Key;


  // useEffect(() => {
  //   axios
  //     .get(`https://www.googleapis.com/youtube/v3/search?q=${searchString}&key=${apiKEY}`)
  //     .then((response) => setVideoId(response.data.items[0].id.videoId));
  //     console.log(videoId)
  // }, [searchString]);

  // useEffect(() => {
  //   axios
  //     .get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}type=video&part=snippet&key=${apiKEY}`)
  //     .then((response) => getRelatedVideos(response));
  //   console.log((relatedVideos));
  // }, [videoId]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/ytclone/${videoId}`)
      .then((response) => setComments(response.data));
      console.log(videoId)
  }, [videoId]);

  useEffect(()=>{

  },[comments.replies]);


  const addNewComment = (newComment) => {
    axios
      .post(`http://localhost:5000/api/ytclone/${videoId}`, newComment)
      .then((response) => setComments(response.data));
  }
  const addAReply = (reply, commentId) => {
    axios
      .post(`http://localhost:5000/api/ytclone/reply/${commentId}`, reply)
      .then((response) => setComments(response.data));
  };

  const likeAVideo = (commentId) => {
    axios
      .put(`http://localhost:5000/api/ytclone/like/${commentId}`)
      .then((response) => setComments(response.data));
      console.log(commentId)
  };

  const dislikeAVideo = (commentId) => {
    axios
      .put(`http://localhost:5000/api/ytclone/dislike/${commentId}`)
      .then((response) => setComments(response.data));
  };

  const changeVideo=(videoId) =>{
    setVideoId(videoId)
  }
 
  const videoRef = `https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`;
  return (
    <>
      <Container fluid>
        <Row className="row">
          <Col className="main-video">
            <SearchBar setSearchString={setSearchString} />
            <MainVideo
              videoRef={videoRef}
              comments={comments}
              likeAVideo={likeAVideo}
              dislikeAVideo={dislikeAVideo}
              addAReply={addAReply}
            />
            <Comments videoId={videoId} addNewComment={addNewComment} />
          </Col>
          <Col className="related-videos">
            <RelatedVideos relatedVideos={relatedVideos} changeVideo={changeVideo}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
