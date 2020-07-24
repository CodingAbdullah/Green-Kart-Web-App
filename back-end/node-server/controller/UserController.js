const User =  require("../model/User");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken");

exports.getAuthorization = (req, res) => {
    
    if (req.user._id){
        User.findById(req.user._id, (err, user) => {
            if (err){
                res.status(400).json({message : "INVALID"});
            }
            else {
                const User = {_id: user._id, first_name: user.first_name, last_name: user.last_name, age: user.age,
                email: user.email, address: user.address, gender: user.gender };

                res.status(200).json({ User });
            }
        });
    }
    else {
        res.status(400).json({message : "INVALID"});
    }
}

exports.signUpFormValidation = (req, res) => {
    req.body.password = req.body.password.toString();

    User.findOne({email: {$eq : req.body.email}}).then((result) => {
        if (result){
            res.status(400).json({message: "INVALID SIGN UP"});
        }
        else {
            bcrypt.genSalt((err, salt) => {
                if (err){
                    console.log("Error in salting password");
                }
                else {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if (err){
                            console.log("Error in hashing passwords " + err);
                        }
                        else {
                            const {firstname, lastname, email, age, address, gender} = req.body;

                            const newUser = new User({first_name: firstname, last_name: lastname, age: age, email: email, password: hash, address: address, gender: gender.toLowerCase()});
                            newUser.save().then(() => console.log("Successfully added User to DB")).catch(err => console.log(err));
                            
                            // JWT TOKEN GENERATOR...
                            const payload = { newUser };

                            jwt.sign(payload, process.env.SECRET, {expiresIn: 3600}, (err, token) => {
                                if (err){
                                    res.status(400).json({message: "INVALID TOKEN"});
                                }
                                else {
                                    res.status(201).json({token});
                                }
                            });
                        }
                    });
                }
            });
        }
    }).catch(err => {console.log("Error finding Email" + err)});
}

exports.loginFormValidation = (req, res) => {
    const { email } = req.body;
    const password = req.body.password.toString();

    User.findOne({ email : { $eq : email }}).then(result => {
        if ( result ){
            console.log("Username validated");
            bcrypt.compare(password, result.password, (err, result) => {
                if (err){
                    res.status(401).json({message: 'Cannot encrypt password. Wrong password'});
                }
                else {
                    if (result){
                        console.log("User login complete");
                        const loginUser = User.findOne({ email : { $eq : email }});

                        jwt.sign(loginUser, process.env.SECRET, { expiresIn: 3600 }, (err, token) => {
                            if (err){
                                console.log("There was a error signing a login token " + err);
                            }
                            else {
                                res.status(201).json({token});
                            }
                        });
                    }
                    else {
                        res.status(500).json({message: "Something wrong with result, couldn't verify account"});
                    }
                }
            });
        }
        else {
            console.log("Invalid username!");
            res.status(401).json({ message: "Invalid creds" });
        }
    })
    .catch(err => {
        console.log(err)
    });
   
   /* if (firstname === "" || /\d/.test(firstname)){
        console.log('error is firstname');
        res.status(300).json({errorMessage: 'Invalid first name!'})
    }
    else if (lastname === "" || /\d/.test(lastname)){
        console.log('error is lastname');
    }
    else if (age == ''){
    }
    else if (gender === "" || ( gender !== "female" && gender !== 'male')){
        console.log('error is gender');
    }
    else if (email === ""){
        console.log('error is email');
    }*/
   /* else if (address === ""){
        console.log('error is address');
    }*/
}