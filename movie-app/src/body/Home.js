import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { getMovieById } from '../utilities/utils';

export const Home = () => {
    let [ devPicks, setDevPicks ] = useState([])
    let [ featured, setFeatured ] = useState([])

    useEffect(() => {
        movieGrabber()
    }, [])

    //await the movieGrabber function
    const movieGrabber = async () => {
        let devPicksFinal = []
        let featuredFinal = []
        await getMovieById('tt0477139').then((res)=> (devPicksFinal.push(res)));
        await getMovieById('tt0110357').then((res)=> (devPicksFinal.push(res)));
        await getMovieById('tt1119646').then((res)=> (devPicksFinal.push(res)));
        await getMovieById('tt0117705').then((res)=> (devPicksFinal.push(res)));
        await getMovieById('tt0120382').then((res)=> (devPicksFinal.push(res)));
        setDevPicks(devPicksFinal);
        await getMovieById('tt5433138').then((res)=> (featuredFinal.push(res)));
        await getMovieById('tt8332922').then((res)=> (featuredFinal.push(res)));
        await getMovieById('tt8385148').then((res)=> (featuredFinal.push(res)));
        await getMovieById('tt8376234').then((res)=> (featuredFinal.push(res)));
        await getMovieById('tt3228774').then((res)=> (featuredFinal.push(res)));
        setFeatured(featuredFinal);
    }

    const devMoviesPrinter = () => {
        if (devPicks){
            return devPicks.map(movie => {
                return <MovieCard key={movie.imdbID} movie={movie}/>
            })
        } else {
            return <div>Loading...</div>
        }
    }

    const featMoviesPrinter = () => {
        if (featured){
            return featured.map(movie => {
                return <MovieCard key={movie.imdbID} movie={movie}/>
            })
        } else {
            return <div>Loading...</div>
        }
    }

    return(
        <>
            <div >
                <h1 className="home-titles" >Developer's Movie Picks</h1>
                <div className="search-container">{devMoviesPrinter()}</div>
            </div>
            <div>
                <h1 className="home-titles">Featured Movies</h1>
                <div className="search-container">{featMoviesPrinter()}</div>
            </div>
        </>
    );
}