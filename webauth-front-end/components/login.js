import React, { Component } from "react";
import axios from 'axios';

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <>
        <form>
          <div>
            <label htmlFor="username" />
            value={this.state.username}
            onChange={}
            id='username'
            name="username"
            type="username"
          </div>
          <div>
            <label htmlFor="password" />
            value={this.state.password}
            onChange={}
            id='password' name="password"
            type="password"
          </div>
        </form>
      </>
    );
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }


  handleSubmit = event => {
    event.preventdefault
    const endpoint = "http://localhost:5000/api/auth/login"
    axios.post (endpoint, this.state)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

}

export default Login;