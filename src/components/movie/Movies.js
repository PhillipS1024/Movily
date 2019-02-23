import React, { Component } from 'react';
import { Consumer } from '../../context';
import Movie from './Movie';


class Movies extends Component {
  render() {
    return (
      <Consumer>
          {value => {
              const { movies, heading } = value;
            return(
                  <React.Fragment>
                    <h3 className="text-center mb-4">{heading}</h3>
                  <div className="row">
                    {movies.map(movie => (
                      <Movie key={movie.id}movie={movie} />
                    ))}
                  </div>
                  </React.Fragment>
                );
              }
              
          }
      </Consumer>
    );
  }
}


export default Movies;