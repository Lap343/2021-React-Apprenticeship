import PropTypes from 'prop-types';

const MovieDetails = props => {
    return (
        <div className="flex main-container">
            <img className="modal-image" src={props.posterUrl} alt={`Movie poster of ${props.title}`}/>
            <div className="modal-info">
                <div className="flex">
                    <h2 className="modal-title">{props.title} </h2>
                    <h2 className="modal-rating">{props.rating}</h2>
                </div>
                <div>
                    <div className="modal-buttons">{props.rated}</div>
                    <div className="modal-buttons">{props.runtime}</div><br/>
                    <div className="modal-buttons">{props.genre}</div>
                </div>
                <div>
                    <h3>Plot</h3>
                    <div>{props.plot}</div>
                </div>
                <br/>
                <div>
                    <h3>Actors</h3>
                    <div>{props.actors}</div>
                </div>
                <br/>
                <div>
                    <h3>Director</h3>
                    <div>{props.director}</div>
                </div>
            </div>
        </div>
    )
}

MovieDetails.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.string,
  rated: PropTypes.string,
  type: PropTypes.string,
  genre: PropTypes.string,
  runtime: PropTypes.string,
  actors: PropTypes.string,
  director: PropTypes.string,
  plot: PropTypes.string,
  posterUrl: PropTypes.string
};
export default MovieDetails;