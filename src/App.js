import {Component} from 'react'
import "./App.css";
import Navbar from './components/common/Navbar'

class App extends Component {

  render() {
    return (
      <div className="app">
        <Navbar/>
        <main>
          <h1>Hello, world!</h1>
        </main>
      </div>
    );
  }
}

export default App;