import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './signup.css';
import axios from 'axios';
import Alert from '../Alert/alert';
import { useSelector } from 'react-redux';

const Signup = () => {

    // Adding hooks
    const [firstName, updateFirstName] = useState("");
    const [lastName, updateLastName] = useState("");
    const [age, updateAge] = useState(0);
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const [address, updateAddress] = useState("");
    const [gender, updateGender] = useState("male");  
    const [alert, updateAlert] = useState({
        type: ''
    }); 

    const userSelector = useSelector(state => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        if ( userSelector !== null ) {
            navigate("/");
        }
    }, []);
    const formHandler = async (e) => {
        e.preventDefault();
        e.target.reset();

        // Perform signup operation...
        const information = JSON.stringify({
            firstName, lastName, age, email, password, address, gender
        });

        const options = {
            method: 'POST',
            body : information,
            headers: {
              'Content-Type': 'application/json'
            }
        };

        try {
            const valueOfRequest = await axios.post("http://localhost:5001/signup", options);

            if (valueOfRequest.status === 201) {
                updateAlert((prevState) => {
                    return {
                        ... prevState,
                        type: "SIGN_UP_SUCCESS"
                    }
                });
            }
            else {
                updateAlert((prevState) => {
                    return {
                        ... prevState,
                        type: "SIGN_UP_FAILURE"
                    }
                });
            }
        }        
        catch (err) {
            updateAlert((prevState) => {
                return {
                    ... prevState,
                    type: "SIGN_UP_FAILURE"
                }
            });
        }
    }

    let alertHandler = (
        <Alert alertType={alert.type} />
    )


    return (
        <div className="signup-form">
            { alertHandler }
            <div class="container signup-container">
                <h4 class="sign-form-title">Sign Up Form</h4>
                <form class="sign-form" onSubmit={ formHandler }>
                    <div class="form-group">
                        <input onChange={ e => updateFirstName(e.target.value) } name="firstName" type="text" class="form-control" placeholder="First Name" required />
                    </div>
                    <div class="form-group">
                        <input onChange={ e => updateLastName(e.target.value) } name="lastName" type="text" class="form-control" placeholder="Last Name" required />
                    </div>
                    <div class="form-group">
                        <input onChange={ e => updateAge(e.target.value) } name="age" type="number" min="18" class="form-control" placeholder="Age" required />
                    </div>
                    <div class="form-group">
                        <input onChange={ e => updateEmail(e.target.value) } name="email" type="email" class="form-control" placeholder="Email" required />
                    </div>
                    <div class="form-group">
                        <input onChange={ e => updatePassword(e.target.value) } name="password" type="password" class="form-control" placeholder="Password" required />
                    </div>
                    <div class="form-group">
                        <input onChange={ e => updateAddress(e.target.value) } name="address" type="text" class="form-control" placeholder="Address" required />
                    </div>
                    <div class="form-group row">
                        <div class="form-check">
                            <div class="col-sm-10">
                                <input class="form-check-input" id="male-button" onChange={() => updateGender("male")} type="radio" name="gender" value="male" checked />
                                <label class="form-check-label">Male</label>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" id="female-button" onChange={() => updateGender("female")} type="radio" name="gender" value="female" />
                            <label class="form-check-label">Female</label>
                        </div>
                    </div>
                    <button type="submit" class="btn signup-button btn-success">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;