import React from "react";
import NavBar from "../NavBar";
import "./login.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import WelcomeModal from "./WelcomeModal";
import Button from "@material-ui/core/Button";

class LoginPage extends React.Component {
  state = {
    email: "",
    pwd: "",
    success: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    //name is "email" or "pwd"
    //value is what has been typed inside that
  };

  handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("/http://157.245.131.216:3001/userdata/signin", {
          email: this.state.email,
          password: this.state.pwd,
        })
        .then((res) => {
          console.log(
            "Logging in user! Email:",
            this.state.email,
            "Password: ",
            this.state.pwd
          );
          let savedID = res.data.id;
          console.log("This is the savedID", savedID);
          this.setState({ success: true });
          // this.state.success = true;
        });
    } catch (error) {
      console.log("Login failed. Error:", error);
    }
    console.log("Success status:", this.state.success);
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
        <WelcomeModal
          title="Success! You are now logged in."
          onClose={() => this.setState({ success: false })}
          show={this.state.success}
        >
          <div>
            <Button variant="outlined" size="small">
              <Link to="/">Go to MyFridge</Link>
            </Button>
          </div>
        </WelcomeModal>
      </div>
    );
  }
}

export default LoginPage;
