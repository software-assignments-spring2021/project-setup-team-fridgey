import React from 'react';
import NavBar from "../NavBar";
import "./login.css";

class LoginPage extends React.Component{ 
    state = {
        email: '',
        pwd: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }
    render(){
        return(
            <div>
                <NavBar />
                <header className="App-header">
                    <h1 className="login-title">Fridgey</h1>
                    <form onSubmit = {this.handleSubmit}>
                        <div className="login-form">
                            <div className = "user-box">
                                <text className = "login-text">Email</text>
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
                            <div className = "user-box">
                                <text className = "login-text">Password</text>
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
                            <div className = "user-submitbox">
                                <button onSubmit={this.handleSubmit} className = "login-submit">Log In</button>
                            </div>
                        </div>
                    </form>
                </header>
            </div>
        )
    }
}

export default LoginPage;