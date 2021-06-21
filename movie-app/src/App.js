import "./scss/main.scss";
import React, { useState, useEffect } from "react";
import MovieCard from "./Components/MovieCard";
import MovieDetails from "./Components/MovieDetails";
import { getMovieByName } from "./utilities/utils";
import NavBar from "./header/NavBar";
import Searched from './body/Searched';
import Home from './body/Home';

function App() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieByName("batman").then((res) => setMovie(res));
  }, []);

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
