import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from './components/login/LoginContainer';
import Users from './components/users/UsersContainer';
import Register from './components/register/RegisterContainer';

class App extends Component {

  logout = () => {
    localStorage.removeItem('jwt');
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to='/sign-up' >Sign-Up</NavLink>
            &nbsp; &nbsp;
            <NavLink to='/login' >Log-In</NavLink>
            &nbsp; &nbsp;
            <NavLink to='/login' onClick={this.logout} >Log-Out</NavLink>
            &nbsp; &nbsp;
            <NavLink to='/users'>Users</NavLink>
          </nav>
        </header>

        <Route path='/login' component={Login} />
        <Route path='/users' component={Users} />
        <Route path='/sign-up' component={Register} />

      </div>
    );
  }
}

export default App;
