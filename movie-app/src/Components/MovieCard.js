import { useState } from 'react';

/**
  detailClick: 1. Sends individual movie imdbID back to parent component(i.e. Searched) and fetch movie info by ID
               2. toggleModal: open & close modal
 */
const MovieCard = ({ movie, setSelected, toggleModal }) => {
  // For making poster a background image instead of img tag for styling purposes
  const moviePoster = {
    backgroundImage: `url(${movie.Poster})`,
  }
  const [cardHover, setCardHover] = useState(false);
  const toggleInfoHover = () => {
    setCardHover(!cardHover)
  }

  const detailClick = (e) => {
    setSelected(e.target.id);
    toggleModal();
  }

  return (
    <div className="card" id={movie.imdbID} style={moviePoster} onMouseEnter={() => toggleInfoHover()} onMouseLeave={() => toggleInfoHover()} onClick={detailClick}>
      <div className={`info-container ${cardHover ? `hide-info` : `show-info`}`}>
        <h2 onClick={detailClick} id={movie.imdbID}>{movie.Title}</h2>
        <h3 onClick={detailClick} id={movie.imdbID}>{movie.Year}</h3>
        <button type="button"
          id={movie.imdbID}
          className="detail-button">Details</button>
      </div>
      <div className={`title-overlay ${cardHover ? `overlay-hide` : `overlay-show`}`} id={movie.imdbID} onClick={toggleModal}></div>

    </div >
  );
};

export default MovieCard;
