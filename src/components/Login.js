import React from "react";
import AuthService from "./AuthService";
import './Login.css';

class Login extends React.Component {

  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormOnSubmit = this.handleFormOnSubmit.bind(this);
    this.Auth = new AuthService();
  }

  componentWillMount(){
    if(this.Auth.loggedIn()){
      this.props.history.replace('/')
    }
  }

  render(){
    return (
      <div className="Login">
          <h1>Login</h1>
        <form onSubmit={this.handleFormOnSubmit}>
          <input
            type="text"
            placeholder="your username"
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="your password"
            name="password"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="submit"
          />
        </form>
      </div>
    )
  }


  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormOnSubmit(event){
    event.preventDefault();
    this.Auth.login(this.state.username,this.state.password)
      .then(res => {
        this.props.history.replace('/');
      })
      .catch(err => {
        alert(err);
      })
  }
}

export default Login;