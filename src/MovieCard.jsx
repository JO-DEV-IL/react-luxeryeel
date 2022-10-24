//Import React
import React from 'react'

const MovieCard = ({ movie }) => {
    
    const youtube = `https://www.youtube.com/results?search_query=${movie.Title} ${movie.Year} official trailer`
    
    return (
        <div className='movie'>
            <a 
                target="_blank"
                rel="noreferrer"
                href={youtube}>
                <div>
                    <img 
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'Missing image in API'}
                        alt={movie.Title}
                    />
                </div>
                <div className='movie-info'>
                    <h3>{movie.Title}</h3>

                    <h3>{movie.Year}</h3>
                    <span>{movie.Type}</span>
                </div>
            </a>
        </div>
    )
}

//Export jsx
export default MovieCard