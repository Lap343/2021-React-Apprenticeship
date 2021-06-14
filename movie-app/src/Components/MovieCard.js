import PropTypes from 'prop-types';
const MovieCard = (props) => {
  return (
    <section className="movie-card-parent">
      <div className="card">
        <div
          className="movie-img"
          style={{ backgroundImage: `url(${props.posterUrl ? props.posterUrl : 'https://fromthegreennotebook.com/wp-content/uploads/2018/07/hero-square-gettyimages-563936217.jpeg'})` }}
          alt="movie image"></div>
        <div className="movie-information">
          <div className="title">
            <h1 className="title-heading">{props.title ? props.title : 'sorry no title yet'}</h1>
          </div>
          <div className="genre">
            <h1 className="genre-heading"> {props.type ? props.type : 'Sorry no type yet'}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};


MovieCard.propTypes = {
  posterUrl: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
}

export default MovieCard;