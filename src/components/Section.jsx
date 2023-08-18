import { useEffect, useState } from 'react';
import axios from 'axios';

import './../styles/Section.css';
import MoviesList from './MoviesList';
import { Constants } from '../helpers/constants';

export default function Section ({ 
    title, 
    endpoint, 
    layout 
}) {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(endpoint).then(response => {
            setLoading(false);
            setMovies(response.data.results);
        });

        const genres = JSON.parse(localStorage.getItem(Constants.GenreCache));
        setGenres(genres);
    }, [endpoint]);

    return (
        <div className='Section'>
            <h2 className='wrap'>{title}</h2>
            { 
                loading 
                    ? <p><em>Cargando...</em></p> 
                    : <MoviesList 
                        movies={movies} 
                        layout={layout} 
                        genres={genres}    
                    /> 
            }
        </div>
    );
}