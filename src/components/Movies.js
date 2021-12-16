import {Component} from 'react'
import "./Movies.css";

class Movies extends Component {
  constructor(){
    super()
    this.state = {
      result: null,
      selectedMovie: null,
    }
  }

  

  render() {
    return (
      <div className="movies">
        <h1>Select A Movie</h1>
        <select>
          <option>Select a Movie</option>
        </select>
      </div>
    );
  }
}

export default Movies;