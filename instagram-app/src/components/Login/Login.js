import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  inputHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  login = () => {
    localStorage.setItem('user', JSON.stringify(this.state))
  };

  render() {
    return (
      <form onSubmit= {this.login}>
        <input name="username" onChange={this.inputHandler} placeholder="Enter username" />
        <input name="password" onChange={this.inputHandler} placeholder="Enter password" />
        <button type="submit" >Login</button>
      </form>
    );
  }
}
