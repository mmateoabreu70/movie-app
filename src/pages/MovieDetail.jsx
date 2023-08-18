import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../styles/MovieDetail.css';

import { toShortDate } from '../helpers/utils';
import noCoverImg from "../assets/images/no-cover.jpg";

function MovieDetail () {
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    const {
        poster_path,
        title,
        overview,
        release_date,
        genres,
        adult
    } = movie;

    useEffect(() => {
        try {
            axios.get("movie/" + id).then(resp => {
                const { data } = resp;
                console.log(data);
                setMovie(data);
            });
        } catch (err) {
            console.error(err);
        }
    }, [id]);

    console.log(movie)

    let posterPathImg = poster_path ? import.meta.env.VITE_API_IMAGE_SERVER + poster_path : noCoverImg;

    let onlyAdultsWarning;

    if (adult) {
        onlyAdultsWarning = (
            <div className='row'>
                <span className='red-warning'>Only Adults</span>
            </div>
        );
    }

    return (
        <div className="Detail">
            <h2>{title}</h2>
            <div className='container'>
                <div className='left'>
                    <img src={posterPathImg} alt={title} />
                </div>
                <div className='right'>
                    {onlyAdultsWarning}
                    <div className='row'>
                        <p className='title'>Release date</p>
                        <p>{toShortDate(new Date(release_date))}</p>
                    </div>
                    <div className='row'>
                        <p className='title'>Generos</p>
                        <ul>
                            {genres && genres.length > 0 
                                ? genres.map(genre => <li key={genre.id}>{genre.name}</li>)
                                : <p>N/A</p>
                            }
                        </ul>
                    </div>
                    <div className='row'>
                        <p className='title'>Synopsis</p>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;