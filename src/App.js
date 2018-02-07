import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import React, { Component } from 'react';
import './App.css';

import Home from './Home.js'
import Procedures from './Procedures.js'
import Contact from './Contact.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div id='App'>
          <nav>
            <Link to="/">Go to Home Page</Link>{' '}
            <Link to="/procedures">See Our Procedures</Link>{' '}
            <Link to="/contact">Contact Us!</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/procedures" component={Procedures} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App;
