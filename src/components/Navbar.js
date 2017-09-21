import React, {Component} from 'react';
import '../App.css';

const style = {

  navbar: {
    padding: '22px',
    background: 'grey',
  }
}

class Navbar extends Component {
  state = {}

    render() {
      return (
        <nav style={style.navbar}>
          <h1>
          Home
          </h1>
        </nav>
      )
    }
}

export default Navbar;
