import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

const style = {

  navbar: {
    padding: '22px',
    background: 'grey',
  },

  rightNav: {
    textAlign: 'right',
  }
}

class Navbar extends Component {
  state = {}

    render() {
      return (
        <nav style={style.navbar}>
        <Link to='/'>
          Home
        </Link>
          <div style={style.rightNav}>
            <ul>
              <li>About</li>
              <li>Projects</li>
            </ul>
          </div>

        </nav>
      )
    }
}

export default Navbar;
