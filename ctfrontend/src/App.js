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
import {Container, Row, Col} from 'react-bootstrap';




function App(){
  
  // const apiKEY = config.apiKEY
  
  const [videoId, getVideoId] = useState('');
  // const videoId = "JuYeHPFR3f0"
  const [comment, getComment] = useState([]);
  const [searchString, setSearchString] = useState('pokemon');
  const [relatedVideos, getRelatedVideos] = useState([]);
  const apiKEY = Key;
  
  useEffect(()=>{ // get search videoId
    axios
    .get(`https://www.googleapis.com/youtube/v3/search?q=${searchString}&key=${apiKEY}`)
    .then(response => getVideoId(response.data.items[0].id.videoId))
    .get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${searchString}&key=${apiKEY}/`)
    .then(response => getRelatedVideos(response.data))
    console.log(relatedVideos)

    axios
    .get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=JuYeHPFR3f0&type=video&key=${apiKEY}`)
    .then(response => getRelatedVideos(response))
    
    axios
    .get(`http://localhost:5000/api/ytclone/${videoId}`)
    .then(response => getComment(response.data))
    
  },[searchString]);  
  }, []);
  
  const addNewComment=(newComment)=>{
    axios.post(`http://localhost:5000/api/ytclone/JuYeHPFR3f0`, newComment)
    .then(response=>getComment(response.data))
  }
  // useEffect(() => {
  //   const getAllPeople = async () => {
  //     const { data } = await axios.get("https://swapi.dev/api/people");
  //     setPeople(data.results);
  //     setIsLoaded(true);
  //     console.log(data.results);
  //     console.log(people);
  //   };
  //   getAllPeople();
  // }, []);

  console.log(relatedVideos)
  const videoRef = `https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`
  
  const videoRef = `https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com/`
  
  return(
    <>
     <Container fluid>
            <Row>
              <Col>
                <Title/>
                <SearchBar setSearchString = {setSearchString}/>
                <MainVideo videoRef = {videoRef} comments={comment}/>
                <Comments videoId={videoId} addNewComment={addNewComment}/>
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
