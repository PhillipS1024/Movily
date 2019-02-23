import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
    state = {
        movieTitle: ''
    };

    findMoive = (dispatch, e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.state.movieTitle}&api_key=78034f8a323cee777281d4a0eaef7687`)
        .then(res => {
            dispatch({
                type: 'SEARCH_MOVIES',
                payload: res.data.results
            })
            this.setState({ movieTitle: '' })
        }).catch(err => console.log(err))
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

  render() {
    return (
      <Consumer>
          {value => {
              const { dispatch } = value;
              return (
                  <div className="card card-body mb-4 p-4">
                    <h1 className="display-4 text-center">
                        <i className="fas fa-film"></i> Find Your Movie
                    </h1>
                    <p className="lead text-center">Any Movie Anytime</p>
                    <form onSubmit={this.findMoive.bind(this, dispatch)}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Find Your Movie..." name="movieTitle" value={this.state.movieTitle} onChange={this.onChange} />
                        </div>
                        <button className="btn btn-danger btn-lg btn-block mb-5" type="submit">Get Movies</button>
                    </form>
                  </div>
              )
          }}
      </Consumer>
    )
  }
}

export default Search;
