import MovieCard from '../components/MovieCard'
import { useState } from 'react';
import MovieDetails from '../components/MovieDetails'

const Searched = ({ totalResults, movies, setPage, page }) => {
    // State variable for fetching a movie object with the same ID(selected) as the card 
    const [selected, setSelected] = useState('');
    const [modalOpen, setModalOpen] = useState(false)
    // handle modal events
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const moviesCheck = () => {
        if (movies) {
            return movies.map((movie) => {
                return <MovieCard
                    toggleModal={toggleModal}
                    key={movie.imdbID}
                    movie={movie}
                    setSelected={setSelected}
                />;
            });
        } else {
            return <div>Loading...</div>;
        }
    };

    let movieRemainder = parseInt(totalResults) % 10 === 0 ? parseInt(totalResults) / 10 : Math.floor(parseInt(totalResults) / 10 + 1)

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
                    <img src="next.png" alt="" className="next-page-btn" />
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
