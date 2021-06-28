import { useState } from 'react';
import MovieDetails from './MovieDetails'

/**
 * 
 * @param {*} param0 
 * @returns 
 */

const MovieCard = ({ movie, setSelected }) => {
  const moviePoster = {
    backgroundImage: `url(${movie.Poster})`,
  }
  const [cardHover, setCardHover] = useState(false);
  const toggleInfoHover = () => {
    setCardHover(!cardHover)
  }

return (
    <div className="card" style={moviePoster} onMouseEnter={()=>toggleInfoHover()} onMouseLeave={()=>toggleInfoHover()}>

        <div className={`info-container ${cardHover ? `hide-info` : `show-info`}`}>
          <h2>{movie.Title}</h2>
          <h3>{movie.Year}</h3>
          <button onClick={setSelected} type="button" id={movie.imdbID} className="detail-button">Details</button>
        </div>
        <div className={`title-overlay ${cardHover ? `overlay-hide` : `overlay-show`}`}></div>
        
    </div>
  );
};

export default MovieCard;
