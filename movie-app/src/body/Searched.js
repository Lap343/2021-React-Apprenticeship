import MovieCard from "../components/MovieCard";

const Searched = ({ totalResults, movies, setPage, page }) => {
  const moviesCheck = () => {
    if (movies) {
      return movies.map((movie) => {
        return <MovieCard key={movie.imdbID} movie={movie} />;
      });
    } else {
      return <div>Loading...</div>;
    }
  };

  let movieRemainder = parseInt(totalResults)%10 === 0 ? parseInt(totalResults)/10 : Math.floor(parseInt(totalResults)/10 + 1)

  return (
    <>
      <div className="search-container">{moviesCheck()}</div>
      <div className="page-btn-container">
        <button
            className={page > 1 ? "back-button" : "hide-back-button"}
            onClick={() => setPage(page - 1)}
        >
            <img src="next.png" alt="" className="back-page-btn" />
        </button>
        <div className="page-number">{page}/{movieRemainder}</div>
        <button
            className={page < movieRemainder ? "back-button" : "hide-back-button"}
            onClick={() => setPage(page + 1)}
        >
            <img src="next.png" alt="" className="next-page-btn"/>
        </button>
      </div>
    </>
  );
};

export default Searched;
