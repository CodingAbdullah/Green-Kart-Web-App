import React, { useState } from 'react';
import { Navigate } from 'react-router';
import './login.css';
import axios from 'axios';

const Login = () => {

    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");

    const formHandler = (e) => {
        // Client side validation has already taken place
        e.preventDefault();

        const options = {
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ "user": {
            "email" : email,
            "password" : password
        }});

        axios.post('http://localhost:5050/loginForm', body, options)
        .then(res => {
            if (res.status === 201){
                localStorage.setItem('email', email);
                localStorage.setItem('token', res.data.token)
            }
        })
        .catch(err => {
            console.log(err);
        });
    }  
     
    if (localStorage.getItem('token')) {
        return <Navigate to="/home" />
    }
    else {
        return (
            <div className="login-form">
                <div class="container login-container">
                    <h4 class="login-form-title">Login Form</h4>
                    <form class="login-form" onSubmit={formHandler}>
                        <div class="form-group">
                            <input onChange={e => updateEmail(e.target.value)} name="email" type="email" class="form-control" placeholder="Email" required />
                        </div>
                        <div class="form-group">
                            <input onChange={e => updatePassword(e.target.value)} name="password" type="text" class="form-control" placeholder="Password" required />
                        </div>
                        <button type="submit" class="btn login-button btn-success">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;