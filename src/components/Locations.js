import {Component} from 'react'
import "./Locations.css";

class Locations extends Component {
  constructor() {
    super()
    this.state = {
      result: null
    }
  }


  handleClick = () => {

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