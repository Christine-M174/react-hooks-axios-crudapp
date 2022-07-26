import React ,{useContext} from 'react';
import {MovieContext} from './MoviesStoryContext'

const Nav = () => {
    const {movies, setMovies} = useContext(MovieContext);
    return (
        <nav>
            <h3>Movies Stories</h3>
            <p> List of Movies: {movies.length}</p>
        </nav>
    );      
}

export default Nav ;