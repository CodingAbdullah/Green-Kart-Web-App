import React, { Component } from 'react';
import './signup.css';
import PropTypes from 'prop-types';
import { register } from '../../redux/action/authAction';
import { connect } from 'react-redux';

class Signup extends Component  {
    
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            email: "",
            password: "",
            address: "",
            gender: "male"
        }
    }

    firstNameEventHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    lastNameEventHandler = (event) => {
        this.setState({lastName: event.target.value});
    }
    ageEventHandler = (event) => {
        this.setState({age: event.target.value});
    }
    emailEventHandler = (event) => {
        this.setState({email: event.target.value});
    }
    passwordEventHandler = (event) => {
        this.setState({password: event.target.value});
    }
    addressEventHandler = (event) => {
        this.setState({address: event.target.value});
    }

    genderClicked = (event) => {
        this.setState({gender: event.target.value});
    }

    formHandler = (event) => {
        const {firstName, lastName, age, email, password, address, gender} = this.state;

        this.props.register(firstName, lastName, age, email, password, address, gender);
        event.preventDefault();
    }

    render() {
        return (
            <div className="signup-form">
                <div class="sign-up-container container">
                    <h4 class="signup-form-title">Sign-Up Form</h4>
                    <form onSubmit={this.formHandler} method="POST">
                        <div class="form-element text-center">
                            <div class="form-group row text-center">
                                <label class="form-title col-sm-2 col-form-label">First Name</label>
                                <div class="col-sm-5 text-center">
                                    <input name="firstname" type="text" class="form-control" onChange={this.firstNameEventHandler} placeholder="First Name" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-title col-sm-2 col-form-label">Last Name</label>
                                <div class="col-sm-5">
                                    <input name="lastname" type="text" class="form-control" onChange={this.lastNameEventHandler} placeholder="Last Name" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-title col-sm-2 col-form-label">Age</label>
                                <div class="col-sm-5">
                                    <input type="number" class="form-control" max="150" min="0" name="age" onChange={this.ageEventHandler} placeholder="Age" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-title col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-5 center-block">
                                    <input name="email" type="email" class="form-control" onChange={this.emailEventHandler} placeholder="Email" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-title col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-5">
                                    <input name="password" type="password" class="form-control" onChange={this.passwordEventHandler} placeholder="Password" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-title col-sm-2 col-sm-offset-2 col-form-label">Address</label>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control" name="address" onChange={this.addressEventHandler} placeholder="1234 Main St" />
                                </div>
                            </div>
                            <div class="form-group row">
                                    <label class="form-title col-sm-2 col-form-label pt-0">Gender</label>
                                    <div class="form-check">
                                        <input class="form-check-input" id="male-button" onChange={this.genderClicked} type="radio" name="gender" value="male" checked />
                                        <label class="form-check-label">Male</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" id="female-button" onChange={this.genderClicked} type="radio" name="gender" value="female" />
                                        <label class="form-check-label">Female</label>
                                    </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-5">
                                    <button type="submit" class="btn sign-in-button btn-success">Sign In</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Signup.prototypes = {
    register: PropTypes.func.isRequired
}

export default connect(null,{ register })(Signup);