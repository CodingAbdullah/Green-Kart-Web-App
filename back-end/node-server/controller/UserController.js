const User =  require("../model/User");

exports.homePageFunction = (req, res) => {

};

exports.formValidation = (req, res) => {
    const firstname = req.body.firstname.toString();
    const lastname = req.body.lastname.toString();
    const age = req.body.age.toString().parseInt();
    const gender = req.body.gender.toString();
    const email = req.body.email.toString();
    const password = req.body.password.toString();
    const address = req.body.address.toString();
    const error = "Invalid creds!";

    if (firstname === "" || /\d/.test(firstname)){
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
    }
    else if (email){
       
    }
    else if (password === ""){
        console.log('error is password');
    }
    else if (address === ""){
        console.log('error is address');
    }
    else {
       
        const newUser = new User({first_name: firstname, last_name: lastname, age: age, email: email, password: password, address: address, gender: gender});s
        newUser.save().then(()=> console.log("Successful addition to DB")).catch(err => console.log(err));
    }
});




