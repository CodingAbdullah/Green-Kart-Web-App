const dotenv = require("dotenv").config({ path: '.env' });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const mongodbsession = require("connect-mongodb-session")(session);
const bcrypt = require("bcryptjs");
const URL = "mongodb+srv://greenKartCustomer:" + process.env.DB_PASS + "@greenkartdb-fambj.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority";

const userRouter = require("./router/userRouter");
const vegetableRouter = require("./router/vegetableRouter");
const orderRouter = require("./router/orderRouter");

app.listen(process.env.PORT, () => {
    console.log("Listening to PORT 5050");
});

app.use(express.json({extended : false}));
app.use(express.urlencoded({extended : false}));

// Creating a collection that stores the sessions in a database
const store = mongodbsession({
    uri: URL,
    collection: 'greenKartSession'
});

// Creating a session and storing a session-cookie
app.use(require("express-session")({
    secret: 'This is a secret',
    cookie : {
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
    store: store,
    resave: true,
    saveUninitialized: true
}));

mongoose.connect(URL).then(() => console.log("Successful connection to DB")).catch(err => console.log(err));

app.use("/", userRouter);
app.use("/", vegetableRouter);
app.use("/", orderRouter);