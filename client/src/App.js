import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from './components/login/LoginContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to='/' >Sign-Up</NavLink>
            &nbsp; |&nbsp;
            <NavLink to='/login' >Log-In</NavLink>
          </nav>
        </header>
        <Route path='/login' component={Login} />
      </div>
    );
  }
}

export default App;
