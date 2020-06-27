const dotenv = require("dotenv").config({ path: '.env' });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router/userRouter");
const URL = "mongodb+srv://greenKartCustomer:" + process.env.PASS + "@greenkartdb-fambj.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority";

app.listen(process.env.PORT, () => {
    console.log("Listening to PORT 5050");
});

app.use(express.json({extended : false}));
app.use(express.urlencoded({extended : false}));
app.set("view engine", "ejs");
app.set("views", "views");

mongoose.connect(URL).then(() => console.log("Successful connection to DB")).catch(err => console.log(err));
app.use("/", router);