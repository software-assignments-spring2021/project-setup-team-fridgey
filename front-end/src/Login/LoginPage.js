import React from 'react';
import NavBar from "../NavBar";

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
                    <div className="login-form">
                    <form onSubmit = {this.handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="email..."
                            required
                            onChange={this.handleChange}
                            className="login-user"
                        />
                        <input
                            type="password"
                            name="pwd"
                            placeholder="password..."
                            required
                            onChange={this.handleChange}
                            className="login-password"
                        />
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                    </div>
                </header>
            </div>
        )
    }
}

export default LoginPage;