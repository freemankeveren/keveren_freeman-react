import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return(
      <div>
        <h1>
          Page not available
        </h1>
        <Link to='/'> Home</Link>
      </div>
    );
  }
}

export default NoMatch;
