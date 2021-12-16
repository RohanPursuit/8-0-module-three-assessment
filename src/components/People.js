import {Component} from 'react'
import "./People.css";

class People extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ''
    }
  }

  render() {
    return (
      <div className="people">
        <input type="text" />
        <input type="submit" />
      </div>
    );
  }
}

export default People;