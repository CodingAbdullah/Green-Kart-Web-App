import React from 'react';

const Alert = (props) => {
    const { alertType } = props;
    let message = "";
    let type = "";

    switch (alertType) {
        case "SIGN_UP_FAILURE":
            message = "Sign up was unsuccessful";
            type = "danger";
            break;
        case "SIGN_UP_SUCCESS":
            message = "Sign up was successful!";
            type = "success";
            break;
        case "LOG_IN_FAILURE":
            message = "Login was unsuccessful!";
            type = "danger";
            break;
        case "GOOD_CHECKOUT":
            message = "Items have been checkout!";
            type = 'success';
            break;
        case "BAD_CHECKOUT":
            message = "Items were not checked out!";
            type = 'danger';
            break;
        case "GOOD_UPDATE":
            message = "User profile was updated!";
            type = 'success';
            break;
        case "BAD_UPDATE":
            message = "User profile could not be updated!";
            type = 'danger';
            break;
        case "GMAIL_ADDRESS_ONLY":
            message = "Only GMAIL addresses supported at this time!";
            type = 'warning';
            break;
        case "INVALID_EMAIL_OR_INTERNAL_ERROR":
            message = "Could not provide verification code, invalid email!";
            type = 'danger';
            break;
        case "INVAILD_EMAIL_VERIFICATION_CODE":
            message = "Invalid verification code!";
            type = 'danger';
            break;
        case "SUCCESSFUL_RESET":
            message = "Password successfully reset!";
            type = 'success';
            break;
        case "VERIFICATION_CODE_SENT":
            message = "Verification code sent!";
            type = 'success';
            break;
        default:
            break;
    }
     
    return (
        <div class={`alert alert-${type}`} role="alert">
            { message }
        </div>
    )
}

export default Alert;