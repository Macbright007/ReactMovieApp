import React from "react";

export default function MovieCard({movie}) {
    return (
        <div className="card">
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
            <div className="card--content">
            <h3 className="card--title">{movie.title}</h3>
            <p><b><small>RELEASE DATE: {movie.release_date}</small></b></p>
            <p><b><small>RATING: {movie.vote_average}</small></b></p>
            <p className="card--desc"><i>{movie.overview}</i></p>
            </div>

        </div>
    )
}
