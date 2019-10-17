import axios from 'axios';
import React, { useState, useEffect } from 'react';

// const initialMovie = {
//     title: '',
//     director: '',
//     metascore: '',
//     starts: []
// }

const MovieForm = (props) => {

    const id = props.match.params.id
    
    const [movieUpdate, setMovieUpdate] = useState({
        id: id,
        title: "",
        director: "",
        metascore:"",
        stars: []
    });
    const [movieStars, setMovieStars] = useState ({
        stars: []
    })

    const handleChange = (e) => {
        setMovieUpdate({...movieUpdate, [e.target.name]: e.target.value})
        console.log('movieUpdate', movieUpdate);
    }

    const handleStars = (e) => {
        setMovieStars({...movieStars, [e.target.name]: [e.target.value]})
        console.log('movieStars', movieStars);
    }

    const submitMovie = (e) => {
        e.preventDefault();
        
    const newMovie = {...movieUpdate, ...movieStars}
        axios
            .put(`http://localhost:5000/api/movies/${id}`, newMovie)
            .catch(error => console.log(error.response))
    }
    
    return (
        <div>
            <p>Movies</p>
            <form className="update-form">
                <label>Movie Name</label>
                <input
                    type='text'
                    name='title'
                    value={movieUpdate.title}
                    onChange={handleChange}
                />
                <label>Director</label>
                <input
                    type='text'
                    name='director'
                    value={movieUpdate.director}
                    onChange={handleChange}
                />
                <label>Metascore</label>
                <input
                    type='text'
                    name='metascore'
                    value={movieUpdate.metascore}
                    onChange={handleChange}
                />
                <label>Starring</label>
                <input
                    type='text'
                    name='stars'
                    value={movieStars.stars}
                    onChange={handleStars}
                />

                <button type='submit' onClick={submitMovie}>Submit</button>
            </form>
        </div>
    )
}

export default MovieForm;