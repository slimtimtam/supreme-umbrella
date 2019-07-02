import React from 'react';
import logo from './logo.svg';
import Root from './react/Test'
import Home from './react/Home.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <p>
          I made this website
        </p>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Root} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
