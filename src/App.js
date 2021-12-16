import {Component} from 'react'
import "./App.css";
import Navbar from './components/common/Navbar'
import Locations from './components/Locations';
import Movies from './components/Movies';
import People from './components/People';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';


class App extends Component {

  render() {
    return (
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/movies">
            <Movies/>
          </Route>
          <Route path="/people">
            <People/>
          </Route>
          <Route path="/locations">
            <Locations/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;