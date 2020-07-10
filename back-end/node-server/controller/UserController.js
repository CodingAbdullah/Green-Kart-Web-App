const User =  require("../model/User");
const bcrypt = require("bcrypt");

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
                            
                            res.json({message : "VALID POST"});
                        }
                    });
                }
            });
        }
    }).catch(err => {console.log("Error finding Email" + err)});
}

exports.loginFormValidation = (req, res) => {
    const {email} = req.body;
    const password = req.body.password.toString();

    User.findOne({email : {$eq : email}}).then(result => {
        if (result){
            console.log("Username validated");
            bcrypt.compare(password, result.password, (err, result) => {
                if (err){
                    console.log(err);
                }
                else {
                    if (result){
                        console.log("User login complete");
                        res.status(200).json({message: "Valid creds"});
                    }
                    else {
                        console.log("User is not logged in, due to invalid password");
                        res.status(401).json({message: "Invalid creds"});
                    }
                }
            })
        }
        else {
            console.log("Invalid username!");
            res.status(401).json({message: "Invalid creds"});
        }
    }).catch(err => {console.log(err)});
   
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