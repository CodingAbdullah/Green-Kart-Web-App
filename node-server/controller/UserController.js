require("dotenv").config({ path : '../.env'});
const User =  require("../model/User");
const bcrypt = require("bcryptjs");
const jwt  = require("jsonwebtoken");

/*
exports.getAuthorization = (req, res) => {
    
    if (req.user._id){
        User.findById(req.user._id, (err, user) => {
            if (err){
                res.status(400).json({message : "INVALID"});
            }
            else {
                const User = { _id: user._id, firstName: user.firstName, lastName: user.lastName, age: user.age,
                email: user.email, address: user.address, gender: user.gender };

                res.status(200).json({ User });
            }
        });
    }
    else {
        res.status(400).json({message : "INVALID"});
    }
}
*/

exports.signUpFormValidation = (req, res) => {    
    // Parse information and represent the attributes for sign up and perform validation
    const { firstName, lastName, age, email, password, address, gender } = JSON.parse(req.body.body);

    User.findOne({ email: { $eq : email }}, (err, result) => {
        if (err){
            res.status(400).json({
                message: "Cannot query for users"
            });
        }
        else if (result) {
            res.status(403).json({
                message: "User already exists!"
            }); 
        } 
        else {
            bcrypt.genSalt(10, (err, salt) => {
                if (err){
                    res.status(400).json({
                        msg: err + ". Salting error"
                    });
                }
                else {
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err){
                            console.log("Hash: " + err);
                            res.status(400).json({
                                msg: err + ". Hashing error"
                            });
                        }
                        else {
                            const newUser = new User({ firstName: firstName, lastName: lastName, age: age, email: email, password: hash, address: address, gender: gender.toLowerCase() });
                            newUser.save()
                            .then(() => {                              
                                res.status(201).json({
                                    msg: 'Successfully signed up user'
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(401).json({
                                    msg: err + '. Error saving user to db'
                                });
                            });                      
                        }
                    });
                }
            });
        }
    })
}

exports.loginFormValidation = (req, res) => {
    const { email, password } = JSON.parse(req.body.body);

    User.find({ email : { $eq : email }}, (err, result) => {
        if (err){
            res.status(400).json({
                message: "Cannot query for users right now " + err
            });
        }
        else {
            if (result.length > 0) {
                // Grab the first and only user information from result array
                let firstName = result[0].firstName;
                let lastName = result[0].lastName;
                let email = result[0].email;
                let id = result[0]._id;

                // Compare passwords to validate input
                bcrypt.compare(password, result[0].password, (err, result) => {
                    if (err){
                        res.status(401).json({
                            message: 'Cannot encrypt password. Wrong password'
                        });
                    }
                    else {
                        if (result){
                            // If passwords match, sign a JWT token and attach it as a response
                            jwt.sign({ userId: id, firstName: firstName, lastName: lastName, email: email }, process.env.SECRET, { expiresIn: 3600 }, (err, token) => {
                                if (err){
                                    res.status(401).json({
                                        msg: err + ". Error signing token"
                                    });
                                }
                                else {
                                    res.status(201).json({ 
                                        user: { firstName, lastName, email },
                                        token: token 
                                    });
                                }
                            });
                        }
                        else {
                            res.status(400).json({
                                message: "Passwords don't match!"
                            });
                        }
                    }
                });
            }
            else {
                res.status(401).json({ 
                    message: "Wrong username, no such user exists" 
                });
            }
        }
    })
}

exports.updateUserInformation = (req, res) => {
    // Firstly, verify if passwords match. If so, proceed to make changes
    // Check to see if password matches bcrypt version stored in database

    const { firstName, lastName, age, address, gender, password } = req.body.body;
    const { email }  = req.body.body.user; // Obtain user from decoded jwt token

    // A user will always exist
    User.find({ email }, (err, result) => {
        if (err) {
            res.status(400).json({
                message : "Cannot query for users"
            });
        }
        else {
            bcrypt.compare(password, result[0].password, (err, result) => {
                if (err) {
                    res.status(400).json({
                        message: "Cannot compare passwords"
                    });
                }
                else {
                    // If passwords match, proceed to update user profile, check parameters and adjust the update object accordingly
                    if (result) {
                        let updateObject = {};

                        if (address.trim().length === 0 && age === 0) {
                            updateObject = {
                                firstName: firstName === '' ? result[0].firstName : firstName,
                                lastName: lastName === '' ? result[0].lastName : lastName,
                                gender
                            }
                        }
                        else if (address.trim().length === 0){
                            updateObject = {
                                firstName: firstName === '' ? result[0].firstName : firstName,
                                lastName: lastName === '' ? result[0].lastName : lastName,
                                age: age,
                                gender
                            }
                        }
                        else if (age === 0){
                            updateObject = {
                                firstName: firstName === '' ? result[0].firstName : firstName,
                                lastName: lastName === '' ? result[0].lastName : lastName,
                                address: address,
                                gender
                            }
                        }
                        else {
                            updateObject = {
                                firstName: firstName === '' ? result[0].firstName : firstName,
                                lastName: lastName === '' ? result[0].lastName : lastName,
                                address,
                                age,
                                gender
                            } 
                        }

                        // Pass in object to the set parameter to update user
                        User.updateOne({ email }, { $set: updateObject }, (err, result) => {
                            if (err) {
                                res.status(400).json({
                                    message: "Cannot update user"
                                });
                            }
                            else {
                                res.status(200).json({
                                    message: "User was updated successfully"
                                });
                            }
                        })
                    }
                    else {
                        res.status(401).json({
                            message: "Passwords do not match"
                        });
                    }
                }
            });
        }
    });
}