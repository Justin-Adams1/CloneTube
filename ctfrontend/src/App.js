import {useState} from 'react';
import {useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Title from './components/title/title'
import SearchBar from './components/searchbar/searchBar'
import RelatedVideos from './components/relatedVideos/relatedVideos';
import MainVideo from './components/mainvideo/mainVideo';
import Comments from './components/comments/comments';
import {Key} from './key.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

function App(){

  // const apiKEY = config.apiKEY

  const [videoId, getVideoId] = useState('');
  const [comment, getComment] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [relatedVideos, getRelatedVideos] = useState([]);
  const apiKEY = Key;
  
  useEffect(()=>{ // get search videoId
    axios
    .get(`https://www.googleapis.com/youtube/v3/search?q=${searchString}&key=${apiKEY}`)
    .then(response => getVideoId(response.data.items[0].id.videoId))

    
  },[searchString]);

  useEffect(()=>{ //get related videos
    axios
    .get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${searchString}&key=${apiKEY}`)
    .then(response => getRelatedVideos(response.data.items))
    console.log(relatedVideos)

  }, [searchString])

  useEffect(()=>{ //get attached comment
    axios
    .get(`http://localhost:5000/api/ytclone/JuYeHPFR3f0`)
    .then(response => getComment(response.data))
    console.log(comment)

  }, [searchString])
  
  const videoRef = `https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`

  return(
    <>
     <Container fluid>
            <Row>
              <Col>
                <Title/>
                <SearchBar setSearchString = {setSearchString}/>
                <MainVideo videoRef = {videoRef}/>
                <Comments videoComments = {comment}/>
              </Col>
              <Col>
                <RelatedVideos relatedVideos = {relatedVideos}/>
              </Col>
            </Row>
          </Container>
    </>
  )
  }


export default App;
