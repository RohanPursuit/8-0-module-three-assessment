import {Component} from 'react'
import "./People.css";

class People extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ''
    }
  }

  handleUserInput = (event) => {
    this.setState({userInput: event.target.value})
  }

  render() {
    return (
      <div className="people">
        <input onChange={this.handleUserInput} type="text" />
        <input type="submit" />
      </div>
    );
  }
}

export default People;