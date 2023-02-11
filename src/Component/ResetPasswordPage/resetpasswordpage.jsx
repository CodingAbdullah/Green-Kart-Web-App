import React, { useState } from 'react';
import Alert from '../Alert/alert';
import axios from 'axios';

const ResetPasswordPage = () => {
    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');
    const [verificationCode, updateVerificationCode] = useState('');
    const [isEmailVerified, updateIsEmailVerified]=  useState(false);
    const [isVerificationCodeVerified, updateIsVerificationCodeVerified] = useState(false);
    const [resetAlert, updateResetAlert] = useState('');

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
        },
        "paddingTop" : {
            paddingTop: '2rem'
        }
    }

    const emailHandler = (e) => {
        e.preventDefault(); // Prevent page refresh

        if (email.split('@')[1] !== 'gmail.com') {
            updateResetAlert("GMAIL_ADDRESS_ONLY"); // Has to be a gmail account, else password will not be reset
        }
        else {
            let options = {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers : {
                    'content-type': 'application/json'
                }
            }

            // Prepare request for adding email token to database
            axios.post('https://18.222.150.248.nip.io/add-email-token', options)
            .then(() => {
                updateIsEmailVerified(true);
                updateResetAlert("VERIFICATION_CODE_SENT");
            })
            .catch(() => {
                updateIsEmailVerified(false);
                updateResetAlert('INVALID_EMAIL_OR_INTERNAL_ERROR');
            });
        }
    }

    const resetHandler = (e) => {
        e.preventDefault(); // Prevent page refresh on submit

        let options = {
            method: 'POST',
            body: JSON.stringify({ email, token: verificationCode, password }),
            headers: {
                'content-type' : 'application/json'
            }
        }

        // Prepare request to update user password with user verification code and updated password
        axios.post("https://18.222.150.248.nip.io/update-user-password", options)
        .then((response) => {
            // If user has entered the correct verification code, password was reset and alerts should be present
            if ( response.data.isExpired ) {
                updateResetAlert("VERIFICATION_CODE_EXPIRED");
                updateIsVerificationCodeVerified(true);
            }
            else {
                updateIsVerificationCodeVerified(true);
                updateResetAlert("SUCCESSFUL_RESET");
            }
        })
        .catch(() => {
            // If user enters an invalid verification code, notify User and alerts should be present
            updateIsVerificationCodeVerified(false);
            updateResetAlert("INVAILD_EMAIL_VERIFICATION_CODE");
        });
    }

    return (
        <div className="reset-form login-form">
            { resetAlert === '' ? null : <Alert alertType={ resetAlert } /> }
            <div class="container login-container">
                <h4 style={ styles["paddingTop"] }class="sign-form-title">Reset Password</h4>
                <p style={ styles.link }>Enter in your email address for password reset. <br /> NOTE: ONLY GMAIL ADDRESSES ARE SUPPORTED FOR THIS FEATURE</p>
                <form class="sign-form" onSubmit={ emailHandler }>
                    <div class="form-group">
                        <input style={{ marginTop: '0.6rem' }}  disabled={ isEmailVerified } onChange={ e => updateEmail(e.target.value) } name="email" type="email" class="form-control" placeholder="Email" />
                    </div>
                    <button style={ styles.updateButton } type="submit" disabled={ isEmailVerified } class="btn btn-success">Obtain Verification Code</button>
                </form>
                {
                    isEmailVerified ? 
                        <>
                            <h6 style={ styles.link } class="sign-form-title">Verification Code & New Password</h6>
                            <form class="sign-form" onSubmit={ resetHandler }>
                                <div class="form-group">
                                    <input style={{ marginTop: '0.6rem' }} disabled={ isVerificationCodeVerified } onChange={ e => updateVerificationCode(e.target.value) } name="text" type="text" class="form-control" placeholder="Enter Verification Code" />
                                    <input style={{ marginTop: '0.6rem' }} disabled={ isVerificationCodeVerified } onChange={ e => updatePassword(e.target.value) } name="password" type="password" class="form-control" placeholder="Enter New Password" />
                                </div>
                                <button style={ styles.updateButton } disabled={ isVerificationCodeVerified } type="submit" class="btn btn-success">Reset Password</button>
                            </form>
                        </>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default ResetPasswordPage;