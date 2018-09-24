import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';

const Auth = new AuthService();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.props.user.username}</h1>
        </header>
        <p className="App-intro">
          <button type="button" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>
      </div>
    );
  }
  handleLogout(){
  Auth.logout();
  this.props.history.replace('/login')
  }
}

export default withAuth(App);
