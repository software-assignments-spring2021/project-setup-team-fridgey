import React from "react";
import NavBar from "../NavBar";
import "./login.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";

class SignupPage extends React.Component {
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
    axios
      .post("/http://157.245.131.216:3001/userdata/signup", {
        email: this.state.email,
        password: this.state.pwd,
      })
      .then((res) => {
        console.log(
          "Added a new user! Email:",
          this.state.email,
          "Password: ",
          this.state.pwd
        );
      });
  };
  render() {
    return (
      <div>
        <NavBar />
        <header className="App-header">
          <Button
            variant="outlined"
            size="small"
            className="storage-back-button"
          >
            <Link to="/Login" className="button-text">
              Back to Login
            </Link>
          </Button>
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
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </header>
      </div>
    );
  }
}

export default SignupPage;
