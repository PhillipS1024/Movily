import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/layouts/Index';
import Details from './components/movie/Details';
import './App.css';
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/details/movie/:id" component={Details}/>
          </Switch>
          </div>
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
