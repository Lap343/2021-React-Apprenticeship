import React, { useState, useEffect } from "react";
import "./App.css";
import { getMovieByName } from "./utilities/utils";
import Searched from './body/Searched';


function App() {
  const [movie, setMovie] = useState({});

  useEffect(()=>{
    getMovieByName("batman").then((res) => setMovie(res));
  },[])

  return (
    <div>
      <Searched movies={movie.Search} />
    </div>
  );
}

export default App; 