
import {useState} from 'react';

const MovieCard = ({movie}) => {
  const moviePoster = {
    backgroundImage: `url(${movie.Poster})`,
  }

  const [cardHover, setCardHover] = useState(false);
// when true, apply show info animation
  const showInfoOnHover = () => {
    setCardHover(!cardHover)
  }

  const hideInfoOnHover = () => {
    setCardHover(!cardHover)
  }

  return (
    <div className="card" style={moviePoster} onMouseEnter ={showInfoOnHover} onMouseLeave={hideInfoOnHover}>

      <div className={`info-container ${cardHover? `hide-info`: `show-info`}`}>
        <h2>{movie.Title}</h2>
        <h3>{movie.Year}</h3>
        <button className="detail-button">Details</button>
      </div>

      <div className={`title-overlay ${cardHover ? `overlay-hide`: `overlay-show`}`}></div>

    </div>
  );
};

export default MovieCard;