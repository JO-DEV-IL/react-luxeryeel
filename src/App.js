//Import React dependencies
import React from 'react'
import { useState } from 'react'

//CSS
import './App.css'
import SearchIcon from './search.svg'

// API handling
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=e91f2444'

import MovieCard from './MovieCard.jsx'


//App structure
const App = () => {

    const [movies, setMovies] = useState([])
    
    //useState to pass in empty string because the state will be updated by the user entering a search from the input
    const [searchTerm, setSearchTerm] = useState('')
    
    // API fetch
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }

    // const youtube = `https://www.youtube.com/results?search_query=${searchTerm}`
    
    //App display
    return (
        <div className='app'>
            <h1>LuxuRyeel</h1>
            <h4>API provided at: https://www.omdbapi.com/</h4>

            <div className="search">
                <input
                    placeholder='Search for movies...' 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/>
                <div>
                    <img
                        src={SearchIcon}
                        alt="search"
                        onClick={(e) => searchMovies(searchTerm)}
                        />
                </div>
            </div>

            {movies.length > 0 ? (
                <div className='movie-container'>
                    {movies.map((movie) => (
                        <a href='#'>
                            <MovieCard movie={movie}/>
                        </a>
                    ))}
                </div>
                ) : (
                <div className='empty'>
                    <h2>No movies found? Try another search!</h2>
                </div>
            )}
        </div>
    )
}



//Exports App
export default App