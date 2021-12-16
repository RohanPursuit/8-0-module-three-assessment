import {Component} from 'react'
import "./Locations.css";

class Locations extends Component {
  constructor() {
    super()
    this.state = {
      result: null,
      locations: null,
      toggle: false
    }
  }


  handleClick = () => {
    this.setState({locations: this.state.result.map(el => {
      return (
        <li>
          <p>Name: {el.name}</p>
          <p>Climate: {el.climate}</p>
          <p>Terrain: {el.terrain}</p>
        </li>
      )
    })})
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/locations")
    .then(response => response.json())
    .then(result => {
      this.setState({result})
    })
  }

  render() {
    const {locations} = this.state
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.handleClick} type="submit">
          Show Locations
        </button>
        <ul className='display-locations'>
          {locations}
        </ul>
      </div>
    );
  }
}

export default Locations;