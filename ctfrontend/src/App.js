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

function App(){

  // const apiKEY = config.apiKEY

  const [videoId, getVideoId] = useState('');
  const [comment, getComment] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [relatedVideos, getRelatedVideos] = useState([]);
  const apiKEY = Key;
  
  useEffect(()=>{
    axios
    .get(`https://www.googleapis.com/youtube/v3/search?q=${searchString}&key=${apiKEY}`)
    .then(response => getVideoId(response.data.items[0].id.videoId))
    
    // axios
    //   .get(`http://localhost:5000/api/${videoId}`)
    //   .then(response => getComment(response.data))
    
  },[searchString]);

  useEffect(()=>{
    axios
    .get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${searchString}&key=${apiKEY}`)
    .then(response => getRelatedVideos(response.data.items))
    console.log(relatedVideos)

  }, [searchString])
  
  const videoRef = `https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`

  // ADD A COMMENT 

  return(
    <>
      <div>
        <Title/>
      </div>
      <div>
        <SearchBar setSearchString = {setSearchString}/>
      </div>
      <div className="videos">
        <MainVideo videoRef = {videoRef}/>
        <RelatedVideos />
      </div>
      <div>
        <Comments videoComments = {comment}/>
      </div>
    </>
  )
  }


export default App;
