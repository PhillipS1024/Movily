import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Details extends Component {
    state= {
        details: []
    }

    componentDidMount() {
        Axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=78034f8a323cee777281d4a0eaef7687`)
        .then(res => {
            //console.log(res.data)
            this.setState({ details: res.data })
        }).catch(err => (console.log(err)))
    }
  render() {
      const { details } = this.state;
    return (
      <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
          <div className="card">
            <h5 className="card-header">
                {details.title}
            </h5>
            <div className="card-body">
                <img src={"https://image.tmdb.org/t/p/w185" + details.poster_path} alt="movie" />
                    <p className="card-text mt-5">
                        <strong>Overview:</strong> {details.overview}
                    </p>
                    <li className="list-group-item">
                        <strong>Rating:</strong> {details.vote_average}/10
                    </li>
                    <li className="list-group-item">
                        <strong>Release Date:</strong> {details.release_date}
                    </li>
            </div>
          </div>
      </React.Fragment>
    )
  }
}


export default Details;