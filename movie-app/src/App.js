import "./App.css";
import React, { useState, useEffect } from "react";
import MovieCard from "./Components/MovieCard";
import { getMovieByName } from "./utilities/utils";

function App() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieByName("kung pow").then((res) => setMovie(res));
  }, []);

  console.log(movie);
  return (
    <div className="App">
      <MovieCard
        title={movie.Title}
        posterUrl={movie.Poster}
        type={movie.Type}
      />
    </div>
  );
}

export default App;
