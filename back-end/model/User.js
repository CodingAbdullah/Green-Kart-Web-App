const dotenv = require("dotenv").config({path: '../.env'});
const db = require("../util/database");

module.exports = class User {
    constructor(first_name, last_name, age, gender, email, password, address){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.address = address;
    }

    save = () => {

        var sql = "INSERT INTO greenKart.User (first_name, last_name, age, gender, email, password, address) VALUES (?, ?, ?, ?, ?, ?, ?)";
        return db.execute(sql, [this.first_name, this.last_name, this.age, this.gender, this.email, this.password, this.address]);
    }

    static fetchByEmail = (email) => {

    
    }

    fetchById = (id) => {

    }

    fetchAll = () => {

    }
}