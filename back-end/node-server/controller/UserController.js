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
    const { firstName, lastName, age, email, password, address, gender} = req.body;

    User.findOne({email: { $eq : email }}).then((result) => {
        if (result){
            res.status(400).json({
                message: "INVALID SIGN UP"
            });
        }
        else {
            bcrypt.genSalt((err, salt) => {
                if (err){
                    res.status(400).json({
                        msg: err
                    });
                }
                else {
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err){
                            res.status(400).json({
                                msg: err
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
                                    msg: err
                                });
                            });                      
                        }
                    });
                }
            });
        }
    }).catch(err => {
        res.status(401).json({
            msg: err
        });
    });
}

exports.loginFormValidation = (req, res) => {
    const { email } = req.body.toString();
    const password = req.body.password.toString();

    User.findOne({ email : { $eq : email }}).then(result => {
        const userInfoResult = result;

        if ( userInfoResult ){
            bcrypt.compare(password, userInfoResult.password, (err, result) => {
                if (err){
                    res.status(401).json({
                        message: 'Cannot encrypt password. Wrong password'
                    });
                }
                else {
                    if (result){
                        jwt.sign(userInfoResult, process.env.SECRET, { expiresIn: 3600 }, (err, token) => {
                            if (err){

                                res.status(401).json({
                                    msg: err
                                });
                            }
                            else {
                                res.status(201).json({ token });
                            }
                        });
                    }
                    else {
                        res.status(500).json({
                            message: "Something wrong with result, couldn't verify account"
                        });
                    }
                }
            });
        }
        else {
            res.status(401).json({ 
                message: "Invalid creds" 
            });
        }
    })
    .catch(err => {
        res.status(400).json({
            msg: err
        });
    });
}