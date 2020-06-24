const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const userSchema = new Schema({
    membership_id: Number,
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    address: String

});

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const User = mongoose.model('User', userSchema);
const newUser = new User({membership_id: 1, first_name: 'Abdullah', last_name: 'Muhammad', email: 'abdullahmd@email.com', age: 24, address: 'Something Cottons Centre'});

newUser.save().then(() => console.log("Successfully added to database"));
mongoose.connect()