import React, {useState} from "react";
import MovieCard from './movieCard.js';

export default function SearchMovies(){

    //states for input query, movies
    const [query, setQuery] = useState('');
    // state for movies
    const [movies, setMovies] = useState([]);


    const searchMovies = async (e) => {
        e.preventDefault();
        


        const url = `https://api.themoviedb.org/3/search/movie?api_key=c97f243f9daf9ef0f7ab24d5bf6670d1&language=en-US&query=${query}&page=1&include_adult=false`;        
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }  
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query"><b>Movie Name :</b></label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Spider Man"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                  <MovieCard movie={movie} key={movie.id}/>  
                ))}
            </div>   
        </>
    )
}
