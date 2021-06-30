import MovieCard from "../components/MovieCard";
import MovieDetails from "../components/MovieDetails";

const Searched = ({
  totalResults,
  movies,
  setPage,
  page,
  toggleModal,
  selected,
  setSelected,
  modalOpen,
  setModalOpen,
  detailClick,
}) => {
  const moviesCheck = () => {
    if (movies) {
      return movies.map((movie) => {
        return (
          <MovieCard
            toggleModal={toggleModal}
            key={movie.imdbID}
            movie={movie}
            setSelected={setSelected}
            detailClick={detailClick}
          />
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  let movieRemainder =
    parseInt(totalResults) % 10 === 0
      ? parseInt(totalResults) / 10
      : Math.floor(parseInt(totalResults) / 10 + 1);

  return (
    <>
      <div className="search-container">{moviesCheck()}</div>
      <div className="page-btn-container">
        <button
          className={page > 1 ? "page-shortcut-btn" : "hide-back-button"}
          onClick={() => {
            setPage(1);
            scrollToTop();
          }}
        >
          First
        </button>
        <button
          className={page > 1 ? "back-button" : "hide-back-button"}
          onClick={() => {
            setPage(page - 1);
            scrollToTop();
          }}
        >
          <img src="next.png" alt="" className="back-page-btn" />
        </button>
        {/*  */}
        <div className="page-number">
          {page}/{movieRemainder}
        </div>

        <button
          className={page < movieRemainder ? "back-button" : "hide-back-button"}
          onClick={() => {
            scrollToTop();
            setPage(page + 1);
          }}
        >
          <img src="next.png" alt="" className="next-page-btn" />
        </button>
        <button
          className={
            page < movieRemainder ? "page-shortcut-btn" : "hide-back-button"
          }
          onClick={() => {
            setPage(movieRemainder);
            scrollToTop();
          }}
        >
          Last
        </button>
      </div>
      <MovieDetails
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        selected={selected}
        movies={movies}
      />
    </>
  );
};

export default Searched;
