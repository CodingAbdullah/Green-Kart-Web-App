require("dotenv").config({ path: '../.env' });
const nodemailer = require("nodemailer");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const EmailToken = require("../model/EmailToken");

exports.addEmailToken = (req, res) => {
    const { email } = JSON.parse(req.body.body);
    let emailToken = uuid.v4(); // Set to v4. version of encoding
    let message = `The following is the code to reset your password. <b>It will expire in 5 minutes: ${emailToken}</b>`;

    // Set up a transporter using nodemailer to send emails with verification codes
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth : {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_AUTH_KEY
        }
    });

    /* 
        Sign a JWT and assign this uuid token to its data, there will be a time limit before it expires and it can also be used
        to safely decode to check if verification code matches what the user entered, or they entered too late (JWT expires)
    */

    // Check to see if Email token exists, if so, remove the old one and replace with new one
    EmailToken.find({ email }, (err, result) => {
        if (err) {
            res.status(400).json({
                message: "Cannot query to find tokens"
            });
        }
        else {
            // Delete any exist email tokens associated with the user
            EmailToken.deleteMany({ email }, (err, result) => {
                if (err) {
                    res.status(400).json({
                        message: "Cannot delete any email tokens associated with the account"
                    });
                }
                else {
                    // Sign a JWT to 5 minutes
                    jwt.sign({ data: emailToken }, process.env.SECRET, { expiresIn: 5 * 60 }, (err, jwtToken) => {
                        if (err) {
                            res.status(400).json({
                                message: 'Cannot sign JWT token'
                            });
                        }
                        else {
                            // If JWT is signed and created, save to EmailToken Collection
                            let newEmailToken = new EmailToken({ email, token: jwtToken });
                            newEmailToken.save()
                            .then(() => {
                                // Once email has been sent to user, send out the final response if verified or not
                                transport.sendMail({
                                    subject: 'GreenKart Reset Password',
                                    from: process.env.EMAIL,
                                    to: email,
                                    html: `<h1>Verification Code</h1>
                                           <p>${message}</p>`
                                })
                                .then(() => {
                                    // Email token was saved and succesfully sent via email
                                    res.status(201).json({
                                        message: "Saved Email Token to database and email is sent"
                                    });
                                })
                                .catch(() => {
                                    res.status(400).json({
                                        message: "Saved token to database but email was not sent"
                                    });
                                });
                            })
                        }
                    });
                }
            });
        }
    });
}