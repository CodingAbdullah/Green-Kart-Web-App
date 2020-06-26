import React from 'react';
import './signup.css';

const Signup = () => {

    return (
        <div className="signup-form">
            <div class="container">
                <h4 class="signup-form-title">Sign-Up Form</h4>
                <form class="form" method="POST">
                    <div class="form-element text-center">
                        <div class="form-group row text-center">
                            <label class="form-title col-sm-2 col-form-label">First Name</label>
                            <div class="col-sm-5 text-center">
                                <input name="firstname" type="text" class="form-control" placeholder="First Name" required />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="form-title col-sm-2 col-form-label">Last Name</label>
                            <div class="col-sm-5">
                                <input name="lastname" type="text" class="form-control" placeholder="Last Name" required />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="form-title col-sm-2 col-form-label">Age</label>
                            <div class="col-sm-5">
                                <input type="number" class="form-control" name="age" placeholder="Age" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="form-title col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-5 center-block">
                                <input name="email" type="email" class="form-control" placeholder="Email" required />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="form-title col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-5">
                                <input name="password" type="password" class="form-control" placeholder="Password" required />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="form-title col-sm-2 col-sm-offset-2 col-form-label">Address</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" name="address" placeholder="1234 Main St" />
                            </div>
                        </div>
                        <div class="form-group row">
                                <label class="form-title col-sm-2 col-form-label pt-0">Gender</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" value="male" checked />
                                    <label class="form-check-label">Male</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" value="female" />
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