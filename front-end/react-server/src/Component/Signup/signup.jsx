import React, { useState } from 'react';
import './signup.css';

const Signup = () => {

    // Adding hooks
    const [firstName, updateFirstName] = useState("");
    const [lastName, updateLastName] = useState("");
    const [age, updateAge] = useState(0);
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const [address, updateAddress] = useState("");
    const [gender, updateGender] = useState("");   

    const formHandler = (e) => {
        e.preventDefault();
        // Perform loginForm operation...
        const reqBody = JSON.stringify({
            firstName, lastName, age, email, password, address, gender
        });

        const options = {
            method: 'POST',
            'content-type': 'application/json',
            body: reqBody
        }

        fetch("/signUpForm", options)
        .then(response => {
            response.json()
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => { 
            console.log(err)
        });
    }
        return (
            <div className="signup-form">
                <div class="sign-up-container container">
                    <h4 class="signup-form-title">Sign-Up Form</h4>
                    <form onSubmit={formHandler}>
                        <div class="form-element text-center">
                            <div class="form-group row text-center">
                                <label class="form-title col-sm-2 col-form-label">First Name</label>
                                <div class="col-sm-5 text-center">
                                    <input name="firstname" type="text" class="form-control" onChange={e => updateFirstName(e.target.value)} placeholder="First Name" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-title col-sm-2 col-form-label">Last Name</label>
                                <div class="col-sm-5">
                                    <input name="lastname" type="text" class="form-control" onChange={e => updateLastName(e.target.value)} placeholder="Last Name" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-title col-sm-2 col-form-label">Age</label>
                                <div class="col-sm-5">
                                    <input type="number" class="form-control" max="150" min="0" name="age" onChange={e => updateAge(e.target.value)} placeholder="Age" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-title col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-5 center-block">
                                    <input name="email" type="email" class="form-control" onChange={e => updateEmail(e.target.value)} placeholder="Email" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-title col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-5">
                                    <input name="password" type="password" class="form-control" onChange={e => updatePassword(e.target.value)} placeholder="Password" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-title col-sm-2 col-sm-offset-2 col-form-label">Address</label>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control" name="address" onChange={e => updateAddress(e.target.value)} placeholder="1234 Main St" />
                                </div>
                            </div>
                            <div class="form-group row">
                                    <label class="form-title col-sm-2 col-form-label pt-0">Gender</label>
                                    <div class="form-check">
                                        <input class="form-check-input" id="male-button" onChange={() => updateGender("male")} type="radio" name="gender" value="male" checked />
                                        <label class="form-check-label">Male</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" id="female-button" onChange={() => updateGender("female")} type="radio" name="gender" value="female" />
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


export default Signup;