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
    const displayInfo = this.state.personFound ? <>
      <p>{this.state.personFound?.name}</p>
      <p>{this.state.personFound?.age}</p>
      <p>{this.state.personFound?.gender}</p>
    </> : <>"Not Found"</>

    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <input onChange={this.handleUserInput} type="text" />
        <button onClick={this.handleClick} type="submit">
          Submit
        </button>
        <div className='person-info'>
          {displayInfo}
        </div>
          
      </div>
    );
  }
}

export default People;