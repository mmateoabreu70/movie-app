import { Link } from 'react-router-dom';
import Img1 from "../assets/images/no-cover.jpg";
import '../styles/Movie.css';

const Movie = ({ movie, genreCache }) => {
    const { id, poster_path, title, genre_ids } = movie;

    let imageSrc = import.meta.env.VITE_API_IMAGE_SERVER + poster_path;
    if (!poster_path) {
        imageSrc = Img1;
    }

    return (
        <Link to={`/movie/${id}`} className='Movie'>
            <img src={imageSrc} alt={title} />
            <div className='bottom'>
                <h3>{title}</h3>
                <span className='genre'>
                    {genre_ids
                        .map(id => genreCache.find(genre => genre.id === id).name)
                        .join(' / ')
                    }
                </span>
            </div>
        </Link>
    )
}

export default Movie