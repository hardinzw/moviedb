import React, {Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from './Components/Navbar';
import MoviesPage from './Pages/MoviesPage';
import TvPage from './Pages/TvPage';

class App extends Component {

  render(){
    return (
      <Router>
        <div className='main-container'>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={MoviesPage} />           
            <Route exact path="/movies" component={MoviesPage} />
            <Route exact path="/tv" component={TvPage} />
          </Switch>
        </div>
      </Router>
      )
    }
};

export default App;
