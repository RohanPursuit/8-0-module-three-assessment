import {Component} from 'react'
import "./People.css";

class People extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      personFound: null,
      result: null
    }
  }

  handleUserInput = (event) => {
    this.setState({userInput: event.target.value})
  }

  handleClick = () => {
    const {result, userInput: person} = this.state
  
    this.setState({personFound: result.find(({name}) =>{
        return name === person
      }) || null}) 
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/people')
    .then(response => response.json())
    .then(result => {
      this.setState({result})
    })
  }

  render() {
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <input onChange={this.handleUserInput} type="text" />
        <button onClick={this.handleClick} type="submit">
          Submit
        </button>
          {this.state.personFound?.name}
          {this.state.personFound?.age}
          {this.state.personFound?.gender}
      </div>
    );
  }
}

export default People;