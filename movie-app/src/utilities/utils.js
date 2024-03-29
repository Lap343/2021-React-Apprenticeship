const API_KEY = process.env.REACT_APP_OMDB_API;

const makeJSON = async url => {
    const response = await fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.error(err));
        return response;
}

export const getMoviesByName = (movie_title, page) => {
    const base_url = `http://www.omdbapi.com/?s=${movie_title}&apikey=${API_KEY}&page=${page}&type=movie`;
    return makeJSON(base_url);
}
export const getMovieById = movieID => {
    const apiURL = `http://www.omdbapi.com/?i=${movieID}&apikey=${API_KEY}&type=movie`;
    return makeJSON(apiURL);
}



