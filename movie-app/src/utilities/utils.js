// Define getMoviesByName, takes string as input, uses fetch and async/aawait to get an array of movies with matching title
// Define another arrow function called getMovieDetailById, fetch by valid id

const API_KEY = process.env.REACT_APP_OMDB_API;

const makeJSON = async url => {
    const response = await fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.error(err));
}

export const getMovieByName = movie_title => {
    const base_url = `http://www.omdbapi.com/?t=${movie_title}&apikey=${API_KEY}`;
    makeJSON(base_url);
}
export const getMoviesById = movieID => {
    const apiURL = `http://www.omdbapi.com/?i=${movieID}&apikey=${API_KEY}`;
    makeJSON(apiURL);

}

getMoviesById('tt3896198');
getMovieByName('batman');