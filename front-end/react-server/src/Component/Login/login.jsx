import React, { Component } from 'react';
import './login.css';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../redux/action/authAction';

class Login extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    usernameHandler = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    formHandler = (event) => {
    // Client side validation has already taken place
        const email = this.state.email;
        const password = this.state.password;

        this.props.login(email, password);

        event.preventDefault();
    }   
    
    render() {
        return (
            <div className="login-form">
                <div class="container login-container">
                    <h4 class="login-form-title">Login Form</h4>
                    <form onSubmit={this.formHandler} method="POST">
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
                                    <button type="submit" class="btn login-button btn-success">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Login.prototypes = {
    login: Proptypes.func.isRequired
}

export default connect(null, {login})(Login);