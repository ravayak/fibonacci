import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fibonacci from './Fibonacci';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1> Fibonacci calculator </h1>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fibonacci} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
   
    );
  }
}

export default App;
