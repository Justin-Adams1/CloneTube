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

function App() {
  // const apiKEY = config.apiKEY
  const searchResults = SearchResults;
  const [dataReady, setDataReady] = useState(false);
  const [videoId, setVideoId] = useState(searchResults.items[0].id.videoId);
  // const videoId = "JuYeHPFR3f0"
  const [comments, setComments] = useState([]);
  const [searchString, setSearchString] = useState("pokemon");
  const [relatedVideos, getRelatedVideos] = useState([]);
  const apiKEY = Key;
  const commentId = comments._id;

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchString}&key=${apiKEY}`
      )
      .then((response) => setVideoId(response.data.items[0].id.videoId));
    setDataReady(true);
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}type=video&part=snippet&key=${apiKEY}`)
      .then((response) => getRelatedVideos(response));
    setDataReady(true);
    console.log((relatedVideos));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/ytclone/${videoId}`)
      .then((response) => setComments(response.data));
    setDataReady(true);
  }, []);

  // useEffect(()=>{

  // },[]);

  const addNewComment = (newComment) => {
    axios
      .post(`http://localhost:5000/api/ytclone/${videoId}`, newComment)
      .then((response) => setComments(response.data));
  };

  const addAReply = (reply, commentId) => {
    axios
      .post(`http://localhost:5000/api/ytclone/reply/${commentId}`, reply)
      .then((response) => setComments(response.data));
  };

  const likeAVideo = () => {
    axios
      .put(`http://localhost:5000/api/ytclone/like/${videoId}`)
      .then((response) => setComments(response.data));
  };

  const dislikeAVideo = () => {
    axios
      .put(`http://localhost:5000/api/ytclone/dislike/${videoId}`)
      .then((response) => setComments(response.data));
  };

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
            <RelatedVideos relatedVideos={relatedVideos} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
