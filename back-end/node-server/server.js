const dotenv = require("dotenv").config({ path: '.env' });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const URL = "mongodb+srv://greenKartCustomer:" + process.env.DB_PASS + "@greenkartdb-fambj.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority";

const userRouter = require("./router/userRouter");
const vegetableRouter = require("./router/vegetableRouter");
const orderRouter = require("./router/orderRouter");

app.listen(process.env.PORT, () => {
    console.log("Listening to PORT 5050");
});

app.use(express.json({extended : false}));
app.use(express.urlencoded({extended : false}));

mongoose.connect(URL).then(() => console.log("Successful connection to DB")).catch(err => console.log(err));

app.use("/", userRouter);
//app.use("/", vegetableRouter);
//app.use("/", orderRouter);