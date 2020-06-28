const User =  require("../model/User");

exports.homePageFunction = (req, res) => {

};

exports.loginFormValidation = (req, res) => {
    const email = req.body.email.toString();
    const password = req.body.password.toString();
    const error = "Invalid creds!";

    if (email === ""){
       console.log("Email field is empty");
    }
    else if (password === ""){
        console.log('error is password');
    }

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
    else {
        const newUser = new User({first_name: firstname, last_name: lastname, age: age, email: email, password: password, address: address, gender: gender});s
        newUser.save().then(()=> console.log("Successful addition to DB")).catch(err => console.log(err));
    }
};




