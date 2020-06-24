const User =  require("../model/User");

exports.homePageFunction = ("/", (req, res) => {
    res.render("index", {errorMessage: ""});
});

exports.formValidation = ("/form", (req, res) => {
    var firstname = req.body.firstname.toString();
    var lastname = req.body.lastname.toString();
    var age = req.body.age.toString().parseInt();
    var gender = req.body.gender.toString().toLowerCase();
    var email = req.body.email.toString();
    var password = req.body.password.toString();
    var address = req.body.address.toString();
    const error = "Invalid creds!";

    console.log(req.body);
    console.log(firstname + " " + lastname + " " + age + " " + gender + " " + email + " " + password + " " + address);

    if (firstname === "" || /\d/.test(firstname)){
        console.log('error is firstname');
        res.render("index", {errorMessage: error});
    }
    else if (lastname === "" || /\d/.test(lastname)){
        console.log('error is lastname');
        res.render("index", {errorMessage: error});
    }
    else if (age == ''){
        res.render("index", {errorMessage: error});
    }
    else if (gender === "" || ( gender !== "female" && gender !== 'male')){
        console.log('error is gender');
        res.render("index", {errorMessage: error});
    }
    else if (email === ""){
        console.log('error is email');
        res.render("index", {errorMessage: error});
    }
    else if (email){
       User.fetchByEmail(email).then((result) => {
           console.log(result);
       }).catch(err => {
           console.log(err);
       })
    }
    else if (password === ""){
        console.log('error is password');
        res.render("index", {errorMessage: error});
    }
    else if (address === ""){
        console.log('error is address');
        res.render("index", {errorMessage: error});
    }
    else {
        var newUser = new User(firstname, lastname, age, gender, email, password, address);
        newUser.save().then(() => {
            res.render("yoyo");
        }).catch(err => {
            console.log(err);
        });
    }
});




