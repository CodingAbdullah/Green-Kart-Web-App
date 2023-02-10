import React, { useState } from 'react';

const ResetPasswordPage = () => {

    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');
    const [verificationCode, updateVerificationCode] = useState('');
    const [isEmailVerified, updateIsEmailVerified]=  useState(false);
    const [isVerificationCodeVerified, updateIsVerificationCodeVerified] = useState(false);

    return (
        <div className="reset-password-page">
            { alert === '' ? null : <Alert alertType={ alert } /> }
            <div class="container signup-container">
                <h4 class="sign-form-title">Update Profile</h4>
                <p style={ styles.link }>Enter in what like to change, passwords need to match to verify changes!
                    To change passwords, visit <a style={ styles.link } href="/forgot-reset-password">forgot/reset password page</a></p>
                <p style={ styles.link }>Updating emails is not allowed. Please a new account instead.</p>
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

export default ResetPasswordPage;