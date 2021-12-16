import {Component} from 'react'
import "./Locations.css";

class Locations extends Component {
  constructor() {
    super()
    this.state = {
      result: null,
      locations: null,
    }
  }


  handleClick = () => {
    
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/locations")
    .then(response => response.json())
    .then(result => {
      this.setState({result})
    })
  }

  render() {
    return (
      <div className="locations">
        <button onClick={this.handleClick} type="submit">
          Show Locations
        </button>
      </div>
    );
  }
}

export default Locations;