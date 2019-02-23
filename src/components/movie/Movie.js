import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
    const{ movie } = props
  return (
    <div className="col-md-6">
    <div className="card mb-4 shadow-sm">
        <div className="card-body">
            <h5>{movie.title}</h5>
            <p className="card-text">
                <strong><i className="fas fa-play"></i>Showing</strong>: {movie.release_date}
            </p>
            <p className="card-text">
                <strong><i className="fas fa-star"></i>Rating</strong>: {movie.vote_average}/10
            </p>
            <Link to={`details/movie/${movie.id}`} className="btn btn-dark btn-block">
                <i className="fas fa-chevron-right"></i> Info
            </Link>
        </div>
    </div>
      
    </div>
  )
}

export default Movie;
