import MovieCard from '../components/MovieCard'
import { useState } from 'react';
import MovieDetails from '../components/MovieDetails'
// movies[i].imdbID = selected
const Searched = ({ movies }) => {
    // State variable for fetching a movie object with the same ID(selected) as the card 
    const [selected, setSelected] = useState('');

    // handle modal events
    const [modalOpen, setModalOpen] = useState(false)
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };


    const moviesCheck = () => {
        if (movies) {
            return movies.map(movie => {
                return <MovieCard
                    toggleModal={toggleModal}
                    key={movie.imdbID}
                    movie={movie}
                    setSelected={setSelected}
                />
            })
        } else {
            return <div>Loading...</div>
        }
    }
    return (
        <>
            <div className="search-container">
                {moviesCheck()}
            </div>

            {/* Insert modal down here */}
            <MovieDetails
                modalOpen={modalOpen}
                toggleModal={toggleModal}
                selected={selected}
                movies={movies}
            />
        </>
    )
}

export default Searched;