import React from "react";
// import { getMovieByName } from "../utilities/utils";

const MovieCard = (props) => {
  return (
    <section className="movie-card-parent">
      <div className="card">
        <div
          className="movie-img"
          style={{ backgroundImage: `url(${props.posterUrl})` }}
        ></div>
        <div className="movie-information">
          <div className="title">
            <h1 className="title-heading">{props.title}</h1>
          </div>
          <div className="genre">
            <h1 className="genre-heading"> {props.type}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
