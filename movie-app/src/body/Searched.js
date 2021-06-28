import MovieCard from '../components/MovieCard'
import { useState } from 'react';
import MovieDetails from '../components/MovieDetails'

const Searched = ({ movies }) => {

    const [selected, setSelectedID] = useState('');
    const setSelected = (e) => {
    setSelectedID(e.target.id)
    }
    // handle modal events
    const [modalOpen, setModalOpen]=useState(false)
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
                className={`movie-details ${modalOpen ? `hide-modal` : `show-modal`}`}
                modalOpen={modalOpen} 
                toggleModal={toggleModal} 
                selected={selected}
                movies={movies}
            />
        </>
    )
}

export default Searched;