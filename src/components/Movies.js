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

  handleSelectedMovie = (event) => {
    if(!event.target.value){
      this.setState({selectedMovie: null})
    } else {
      this.setState({selectedMovie: this.state.result[event.target.value]})
    }
    
  }

  render() {

    const { result, selectedMovie: movie } = this.state
    const movieTitles = result && result.map((el, i) => {
      return <option key={i} value={i}>{el.title}</option>
    })

    const displayInfo = movie && <div className='movie-info'>
      <h2>Title: {movie.title}</h2>
      <p>Release Date: {movie["release_date"]}</p>
      <p>Description: {movie.description}</p>
      </div>

    return (
      <div className="movies">
        <h1>Select A Movie</h1>
        <select onChange={this.handleSelectedMovie}>
          <option value="">Select a Movie</option>
          {movieTitles}
        </select>
          {displayInfo}
      </div>
    );
  }
}

export default Movies;