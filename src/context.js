import React, { Component } from 'react';
import Axios from 'axios';


const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'SEARCH_MOVIES':
      return {
        ...state,
        movies: action.payload,
        heading: 'Results'
      };
      default:
        return state;
  }
}

export class Provider extends Component {
    state = {
        movies: [],
        heading: 'Upcoming Movies',
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount() {
        Axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=78034f8a323cee777281d4a0eaef7687')
        .then(res => {
            //console.log(res.data)
            this.setState({movies: res.data.results})
        })
        .catch(err => console.log(err))
    }
  render() {
    return (
      <Context.Provider value={this.state}>
          {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;