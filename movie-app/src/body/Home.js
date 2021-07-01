import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getMovieById } from "../utilities/utils";
import MovieDetails from "../components/MovieDetails";

export const Home = ({
  setSelected,
  toggleModal,
  modalOpen,
  detailClick,
  selected,
}) => {
  let [devPicks, setDevPicks] = useState([]);
  let [featured, setFeatured] = useState([]);

  useEffect(() => {
    movieGrabber();
  }, []);

  const movieGrabber = async () => {
    let devPicksFinal = [];
    let featuredFinal = [];
    const devPickIds = [
      "tt0477139",
      "tt0110357",
      "tt1119646",
      "tt0117705",
      "tt0120382",
    ];
    const featuredIds = [
      "tt5433138",
      "tt8332922",
      "tt8385148",
      "tt8376234",
      "tt3228774",
    ];
    /** findByIdPush takes array of movie IDs, fetches movie info and pushes movie info object into finalArray, and returns finalArray */
    const findByIdPush = async (idArray, finalArray) => {
      for (let i = 0; i < idArray.length; i += 1) {
        await getMovieById(idArray[i]).then((res) => finalArray.push(res));
      }
      return finalArray;
    };
    devPicksFinal = await findByIdPush(devPickIds, devPicksFinal);
    featuredFinal = await findByIdPush(featuredIds, featuredFinal);

    setDevPicks(devPicksFinal);
    setFeatured(featuredFinal);
  };

  const devMoviesPrinter = () => {
    if (devPicks) {
      return devPicks.map((movie) => {
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

  const featMoviesPrinter = () => {
    if (featured) {
      return featured.map((movie) => {
        return (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            toggleModal={toggleModal}
            setSelected={setSelected}
            detailClick={detailClick}
          />
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  };

  return (
    <>
      <div>
        <h1 className="home-titles">Developer's Picks</h1>
        <div className="search-container">{devMoviesPrinter()}</div>
      </div>
      <div>
        <h1 className="home-titles">Featured</h1>
        <div className="search-container">{featMoviesPrinter()}</div>
      </div>

      <MovieDetails
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        selected={selected}
      />
    </>
  );
};
