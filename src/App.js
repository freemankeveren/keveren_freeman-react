import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Home from './components/Home';

class App extends Component {
  render() {
    return (

  <div>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
      </Switch>
  </div>
  );
  }
}

export default App;
