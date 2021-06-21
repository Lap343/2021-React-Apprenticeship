import MovieCard from '../components/MovieCard'

const Searched = ({ movies }) => {
    const moviesCheck = () => {
        if (movies){
            return movies.map(movie => {
                return <MovieCard key={movie.imdbID} movie={movie}/> 
            })
        } else {
            return <div>Loading...</div>
        }
    }
    return(
        <div>
            {moviesCheck()}
       </div>
    )
}

export default Searched;