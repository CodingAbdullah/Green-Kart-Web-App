import React, { Component } from 'react';
import './login.css';
import axios from 'axios';

class Login extends Component {
    state = {
        email : "",
        password : "",
    }

    usernameHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    formHandler = () => {
        axios("/loginSubmitForm").then(response => console.log(response.data)).catch(err => console.log(err));
    }
    
    render() {
        return (
            <div className="login-form">
                <div class="container login-container">
                    <h4 class="login-form-title">Login Form</h4>
                    <form action="/loginSubmitForm" method="POST">
                        <div class="form-element text-center">
                            <div class="form-group row text-center">
                                <label class="form-title col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-5 text-center">
                                    <input onChange={this.usernameHandler} name="email" type="email" class="form-control" placeholder="Email" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-title col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-5">
                                    <input onChange={this.passwordHandler} name="password" type="text" class="form-control" placeholder="Password" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-5">
                                    <button type="submit" onClick={this.formHandler} class="btn login-button btn-success">Login</button>
                                </div>
                            </div>
                        </div>
                        <label>{this.state.email}</label>
                        <label>{this.state.password}</label>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;