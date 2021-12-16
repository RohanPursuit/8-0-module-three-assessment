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
    this.setState({locations: this.state.result.map((el, i) => {
      return (
        <li key={i}>
          <p>Name: {el.name}</p>
          <p>Climate: {el.climate}</p>
          <p>Terrain: {el.terrain}</p>
        </li>
      )
    }), toggle: !this.state.toggle})
  }

  handleHideLocations = () => {
    this.setState({locations: null, toggle: !this.state.toggle})
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

    const button = toggle ? <button onClick={this.handleHideLocations} type="submit">
    Hide Locations
    </button> : <button onClick={this.handleShowLocations} type="submit">
    Show Locations
    </button>

    return (
      <div className="locations">
        <h1>List of Locations</h1>
        {button}
        <ul className='display-locations'>
          {locations}
        </ul>
      </div>
    );
  }
}

export default Locations;