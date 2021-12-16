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

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(result => {
      this.setState({result})
    })
  }


  render() {

    const { result } = this.state
    const movieTitles = result && result.map((el, i) => {
      return <option value={i}>{el.title}</option>
    })

    return (
      <div className="movies">
        <h1>Select A Movie</h1>
        <select>
          <option>Select a Movie</option>
          {movieTitles}
        </select>
      </div>
    );
  }
}

export default Movies;