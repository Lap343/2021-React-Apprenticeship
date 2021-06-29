import "./scss/main.scss";
import React, { useState, useEffect } from "react";
import { getMoviesByName } from "./utilities/utils";
import NavBar from "./header/NavBar";
import Searched from './body/Searched';
import { Home } from './body/Home';


function App() {
  const [movie, setMovie] = useState({});
  const [movieSearch, setMovieSearch] = useState();
  const [page, setPage] = useState(1)

  useEffect(() => {
    getMoviesByName(movieSearch, page).then((res) => setMovie(res));
  }, [movieSearch, page])

  return (
    <div className="App">
      <NavBar movieValue={movieSearch} setMovieSearch={setMovieSearch} />
      {movieSearch ? (movie.Search ? <Searched totalResults={movie.totalResults} movies={movie.Search} setPage={setPage} page={page} /> : <h2> Please enter a valid movie title </h2>) : <Home/>}
    </div>

  );
}

export default App;