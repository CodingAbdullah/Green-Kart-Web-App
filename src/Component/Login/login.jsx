import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Alert from '../Alert/alert';
import './login.css';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/reducer/authReducer';

const Login = () => {

    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const [alert, updateAlert] = useState("");

    // Initialize hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userSelector = useSelector(state => state.auth.user);
    const errorSelector = useSelector(state => state.auth.error);

    const style = {
        "reset-password-link" : {
            color: 'green',
            fontFamily: 'Permanent Marker, cursive'
        }
    }

    // Re-render the page whenever the global state is updated
    useEffect(() => {
        if (userSelector !== null) {
            navigate("/");
        }
        else if (errorSelector) {
            updateAlert("LOG_IN_FAILURE");
        }
    }, [userSelector, errorSelector]);

    const formHandler = async (e) => {
        // Client side validation has already taken place
        e.preventDefault();
        e.target.reset();

        // Dispatch login action
        dispatch(login({ email, password }));
    }  

    return (
        <div className="login-form">
            { alert === '' ? null : <Alert alertType={ alert } /> } 
            <div class="container login-container">
                <h4 class="login-form-title">Login Form</h4>
                <form class="login-form" onSubmit={ formHandler }>
                    <div class="form-group">
                        <input onChange={ e => updateEmail(e.target.value) } name="email" type="email" class="form-control" placeholder="Email" required />
                    </div>
                    <div style={{marginTop: '2.5rem'}} class="form-group">
                        <input onChange={ e => updatePassword(e.target.value) } name="password" type="password" class="form-control" placeholder="Password" required />
                    </div>
                    <a style={ style['reset-password-link'] } href="/reset-password-page">Reset Password</a>
                    <br />
                    <button type="submit" class="btn login-button btn-success">Login</button>
                </form>
            </div>
        </div>
    );
}


export default Login;