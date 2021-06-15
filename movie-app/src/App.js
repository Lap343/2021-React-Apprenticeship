import "./App.css";
import React, { useState, useEffect } from "react";
import MovieCard from "./Components/MovieCard";
import MovieDetails from "./Components/MovieDetails";
import { getMovieByName } from "./utilities/utils";

function App() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieByName("batman").then((res) => setMovie(res));
  }, []);

  return (
    <div className="App">
      <MovieCard
        title={movie.Title}
        posterUrl={movie.Poster}
        type={movie.Type}
      />

      <MovieDetails
      title={movie.Title}
      posterUrl={movie.Poster}
      type={movie.Type}
      rated={movie.Rated}
      runtime={movie.Runtime}
      genre={movie.Genre}
      plot={movie.Plot}
      actors={movie.Actors}
      rating={movie.imdbRating}
      director={movie.Director}
      />
    </div>
  );
}

export default App;
