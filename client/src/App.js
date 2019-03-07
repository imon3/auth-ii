import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from './components/login/LoginContainer';
import Users from './components/users/UsersContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to='/' >Sign-Up</NavLink>
            &nbsp; &nbsp;
            <NavLink to='/login' >Log-In</NavLink>
            &nbsp; &nbsp;
            {/* <NavLink to='/login' >Log-Out</NavLink> */}
          </nav>
        </header>

        <Route path='/login' component={Login} />
        <Route path='/users' component={Users} />

      </div>
    );
  }
}

export default App;
