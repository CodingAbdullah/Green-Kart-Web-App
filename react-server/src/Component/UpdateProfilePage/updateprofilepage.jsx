import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Alert from '../Alert/alert';
import axios from  'axios';

const UpdateProfilePage = () => {
    // Adding hooks
    const [firstName, updateFirstName] = useState("");
    const [lastName, updateLastName] = useState("");
    const [age, updateAge] = useState(0);
    const [password, updatePassword] = useState("");
    const [address, updateAddress] = useState("");
    const [gender, updateGender] = useState("male"); 
    const [alert, updateAlert] = useState("");

    const userSelector = useSelector(state => state.auth.user);

    // Assign styles by group attributes to specific elements
    const styles = {
        "link" : { 
            "fontFamily": 'Permanent Marker, cursive',
            "color" : 'black',
        },
        "formGroup" : {
            "marginTop" : "3rem"
        },
        "updateButton" : {
            "fontFamily": 'Permanent Marker, cursive',
            "color" : 'white',
        }
    }

    const updateHandler = (e) => {
        // Prevent page refresh on submit prompt
        e.preventDefault();

        // Set up body and options for request
        let body = JSON.stringify({ firstName, lastName, age, address, gender, password });

        const options = {
            method: 'POST',
            body,
            headers: {
                'content-type' : 'application/json',
                'Authorization' : 'Bearer ' + userSelector.token
            }
        }

        // Forward request to update user profile
        axios.post("http://localhost:5001/update-user-information", options)
        .then(() => {
            updateAlert('GOOD_UPDATE');
        })
        .catch(() => {
            updateAlert('BAD_UPDATE');
        });
    }

    return (
        <div className="signup-form">
            { alert === '' ? null : <Alert alertType={ alert } /> }
            <div class="container signup-container">
                <h4 class="sign-form-title">Update Profile</h4>
                <p style={ styles.link }>Enter in what you like to change, password will need to be entered to verify changes!
                    To change passwords, logout and visit the <u>forgot/reset password page</u></p>
                <p style={ styles.link }>Updating emails is not allowed. Please create a new account instead.</p>
                <form class="sign-form" onSubmit={ updateHandler }>
                    <div class="form-group">
                        <input style={{ marginTop: '0.6rem' }} onChange={ e => updateFirstName(e.target.value) } name="firstName" type="text" class="form-control" placeholder="First Name" />
                    </div>
                    <div class="form-group">
                        <input style={{ marginTop: '0.6rem' }} onChange={ e => updateLastName(e.target.value) } name="lastName" type="text" class="form-control" placeholder="Last Name" />
                    </div>
                    <div class="form-group">
                        <input style={{ marginTop: '0.6rem' }} onChange={ e => updateAge(e.target.value) } name="age" type="number" min="0" class="form-control" placeholder="Age" />
                    </div>
                    <div class="form-group">
                        <input style={{ marginTop: '0.6rem' }} onChange={ e => updateAddress(e.target.value) } name="address" type="text" class="form-control" placeholder="Address" />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" id="male-button" onChange={() => updateGender("male")} type="radio" name="gender" value="male" checked />
                        <label class="form-check-label">Male</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" id="female-button" onChange={() => updateGender("female")} type="radio" name="gender" value="female" />
                        <label class="form-check-label">Female</label>
                    </div>
                    <div style={ styles.formGroup } class="form-group">
                        <label style={ styles.link }>To verify changes, enter your password to document changes</label>
                        <input style={{ marginTop: '0.6rem' }} onChange={ e => updatePassword(e.target.value) } name="password" type="password" class="form-control" placeholder="Password" required />
                    </div>
                     {
                        alert === "GOOD_UPDATE" ? 
                            <button style={ styles.updateButton } disabled type="submit" class="btn btn-success">Verify Changes</button>
                            :
                            <button style={ styles.updateButton } type="submit" class="btn btn-success">Verify Changes</button>
                     }
                </form>
            </div>
        </div>
    )
}

export default UpdateProfilePage;
