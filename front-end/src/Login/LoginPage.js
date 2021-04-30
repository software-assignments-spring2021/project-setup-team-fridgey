import React from "react";
import NavBar from "../NavBar";
import "./login.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

class LoginPage extends React.Component {
  state = {
    email: "",
    pwd: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    //name is "email" or "pwd" 
    //value is what has been typed inside that 
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/userdata/signin", {email: this.state.email, password: this.state.pwd}).then((res) => {
      console.log("Logging in user! Email:", this.state.email, "Password: ", this.state.pwd)
    })
  };
  
  render() {
    return (
      <div>
        <NavBar />
        <header className="App-header">
          <h1 className="login-title">Fridgey</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="login-form">
              <div className="user-box">
                <text className="login-text">Email</text>
                <br></br>
                <input
                  type="email"
                  name="email"
                  placeholder="email..."
                  required
                  onChange={this.handleChange}
                  className="login-user"
                />
              </div>
              <div className="user-box">
                <text className="login-text">Password</text>
                <br></br>
                <input
                  type="password"
                  name="pwd"
                  placeholder="password..."
                  required
                  onChange={this.handleChange}
                  className="login-password"
                />
              </div>
              <div className="user-submitbox">
                <button onSubmit={this.handleSubmit} className="login-submit">
                  Log In
                </button>
              </div>
            </div>
          </form>
          <text className="signup-subtitle">
            Don't have an account yet? Sign up!
          </text>
          <div className="user-signupsubmitbox">
            <button className="login-submit">
              <Link to="/Signup" className="button-text">
                Sign Up
              </Link>
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default LoginPage;
