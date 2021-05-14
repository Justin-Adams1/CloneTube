import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/searchBar';
import RelatedVideos from './components/relatedVideos';
import MainVideo from './components/mainVideo';
import Comments from './components/comments';
import config from './config/default.json';

function App(){

  const apiKEY = config.get('webAPI');

  const [videoId, getVideoId] = useState([]);
  const [comment, getComment] = useState([]);
  const [searchString, setSearchString] = useState('')

  useEffect((searchString, webAPI)=>{

    axios
      .get((`https://www.googleapis.com/youtube/v3/search?q=${searchString}&key=${apiKEY}`))
      .then(response => getVideoId(response.data.items.id.videoId))

    axios
      .get((`http://localhost:5000/api/${videoId}`))
      .then(response => getComment(response.data))

  },[searchString]);

  return(
    <>
      <SearchBar />
      <RelatedVideos />
      <MainVideo />
      <Comments />
      
    </>
  )
  }


export default App;
