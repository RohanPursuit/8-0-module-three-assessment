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


  handleShowLocations = () => {
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

  handleHideLocations = () => {
    
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/locations")
    .then(response => response.json())
    .then(result => {
      this.setState({result})
    })
  }

  render() {
    const {locations, toggle} = this.state
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        {toggle ? <button onClick={this.handleHideLocations} type="submit">
          Show Locations
        </button> : <button onClick={this.handleShowLocations} type="submit">
          Show Locations
        </button>}
        <ul className='display-locations'>
          {locations}
        </ul>
      </div>
    );
  }
}

export default Locations;