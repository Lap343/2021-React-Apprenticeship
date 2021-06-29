import "./scss/main.scss";
import React, { useState, useEffect } from "react";
import { getMovieByName } from "./utilities/utils";
import NavBar from "./header/NavBar";
import Searched from './body/Searched';


function App() {
  const [movie, setMovie] = useState({});
  const [movieSearch, setMovieSearch] = useState("batman");

  useEffect(() => {
    getMovieByName(movieSearch).then((res) => setMovie(res));
  }, [movieSearch])

  

  return (
    <div className="App">
      <NavBar movieValue={movieSearch} setMovieSearch={setMovieSearch} />

      {movie.Search ?  <Searched movies={movie.Search} />  :  <h2> Please enter a valid movie title </h2> }
      
    </div>

  );
}

export default App;