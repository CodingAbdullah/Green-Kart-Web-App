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
            message = "Login was unsuccessful";
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