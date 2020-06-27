import React from 'react';
import './login.css';

const Login = () => {

    return (
        <div className="login-form">
            <div class="container login-container">
                <h4 class="login-form-title">Login Form</h4>
                <form class="form" method="POST">
                    <div class="form-element text-center">
                        <div class="form-group row text-center">
                            <label class="form-title col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-5 text-center">
                                <input name="email" type="email" class="form-control" placeholder="Email" required />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="form-title col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-5">
                                <input name="password" type="text" class="form-control" placeholder="Password" required />
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
    )
}

export default Login;