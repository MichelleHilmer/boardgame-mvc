import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Game from './Games';
import AddGame from './AddGame';


class App extends React.Component {
  render () {
    return ( 
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/game'} className="nav-link">Games</Link></li>
              <li><Link to={'/new'} className="nav-link">Add New Game</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/new' component={AddGame} />
          </Switch>
        </div>
     </Router>
    );
  }
}

 export default App;
