import '../styles/MoviesList.css';
import LayoutTypes from '../enums/LayoutTypes';
import Movie from './Movie';

export default function MoviesList ({ 
    movies, 
    layout = LayoutTypes.Horizontal,
    genres 
}) {

    let moviesListStyle = {
        flexWrap: 'nowrap',
        overflow: 'hidden',
        overflowX: 'scroll'        
    };

    if (layout === LayoutTypes.Grid) {
        moviesListStyle = {};
    }

    return (
        <div className='MoviesList' style={moviesListStyle}>
            {movies.length > 0 
                ? movies.map(movie => 
                    <Movie 
                        key={movie.id} 
                        movie={movie} 
                        genreCache={genres}  
                    />)
                : <div>No se encontraron resultados</div>
            }
        </div>
    )
}