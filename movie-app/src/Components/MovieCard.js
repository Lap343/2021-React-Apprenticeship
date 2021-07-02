import { useState } from "react";

const MovieCard = ({ movie, toggleModal, detailClick }) => {
  const [cardHover, setCardHover] = useState(false);
  // For making poster a background image instead of img tag for styling purposes
  const moviePoster = {
    backgroundImage: `url(${movie.Poster})`,
  };
  const placeholder = {
    backgroundImage: `url(placeholder.svg)`,
    backgroundPosition: "center",
  };
  const posterCheck = () => {
    if (movie.Poster === "N/A") {
      return placeholder;
    } else {
      return moviePoster;
    }
  };

  return (
    <div
      className="card"
      id={movie.imdbID}
      style={posterCheck()}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      onFocus={() => setCardHover(true)}
      onBlur={() => setCardHover(false)}
      onClick={detailClick}
    >
      <div
        className={`info-container ${cardHover ? `hide-info` : `show-info`}`}
      >
        <h2 className="card-title" onClick={detailClick} id={movie.imdbID}>
          {movie.Title}
        </h2>
        <h3 className="card-year" onClick={detailClick} id={movie.imdbID}>
          {movie.Year}
        </h3>
        <button type="button" id={movie.imdbID} className="detail-button">
          Details
        </button>
      </div>
      <div
        className={`title-overlay ${
          cardHover ? `overlay-hide` : `overlay-show`
        }`}
        id={movie.imdbID}
        onClick={toggleModal}
      ></div>
    </div>
  );
};

export default MovieCard;
