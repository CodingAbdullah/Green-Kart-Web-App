const User =  require("../model/User");

exports.homePageFunction = (req, res) => {

};

exports.signUpFormValidation = (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const age = req.body.age;
    const password = req.body.password;
    const address = req.body.address;
    const gender = req.body.gender.toLowerCase();

    const newUser = new User({first_name: firstname, last_name: lastname, age: age, email: email, password: password, address: address, gender: gender});
    newUser.save().then(() => console.log("Successfully added User to DB")).catch(err => console.log(err));
}

exports.loginFormValidation = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({$and : [{email: { $eq: email}}, {password: {$eq: password}}]}, (err, result) => {
        if (err) {
        console.log(err);
        }
        else {
            if (result == null){
                res.json({message: 'INVALID'});
            }
            else {
                res.json({message: 'VALID'});
            }
        }
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
};




