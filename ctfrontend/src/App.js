import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App(){

  const [videoId, getVideoId] = useState([]);
  const [comment, getComment] = useState([]);

  useEffect((searchString, webAPI)=>{

    axios
      .get((`https://www.googleapis.com/youtube/v3/search?q=` + searchString + "&key=" + webAPI))
      .then(response => getVideoId(response.data))
  },[searchString]);

  return(
    <div>
      
    </div>
  )
  }


export default App;
