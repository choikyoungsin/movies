import React from 'react';
import propTypes from 'prop-types';
import "./Movie.scss"
import {Link} from "react-router-dom";
const Movie = ({id,year,title,summary,poster,genres}) => {
    return (
        <h4>
            <div className="movie">
                <Link to={`/detail/${id}`}>
                    <img src={poster} alt={title} title={title} />
                    <div className="movie_data">
                        <h3 className="movie_title">{title}</h3>
                        <h5 className="movie_year">{year}</h5>
                        <ul className="movie_genres">
                            {genres.map((genre) => {
                                return <li className="movie_genre">{genre}</li>
                            })}
                        </ul>
                        <h5 className="movie_summary">{summary.slice(0,80)}</h5>
                        <h5 className="movie_poster">{poster.slice(0,80)}</h5>
    
                    </div>
                </Link >
            </div>
        </h4>
    );
};

Movie.propTypes={
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres:propTypes.arrayOf(propTypes.string).isRequired
}


export default Movie;