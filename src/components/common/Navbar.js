import {Component} from 'react'
import "./Navbar.css";
import {Link} from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (
      <nav className="app">
        <Link to="/">
            <img src="#" alt=""/>
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
      </nav>
    );
  }
}

export default Navbar;