const MovieCard = ({movie}) => {
  return (
    <div>
      <img src={movie.Poster} alt={`${movie.Title} poster`}/>
      <h1>{movie.Title}</h1>
      <h3>{movie.Year}</h3>
    </div>
  );
};




export default MovieCard;