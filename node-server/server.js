require("dotenv").config({ path: '.env' });
const express = require("express");
const mongoose = require("mongoose");
const URI = "mongodb+srv://greenKartDB:" + process.env.DB_PASSWORD + "@greenkartdb.r0botm9.mongodb.net/?retryWrites=true&w=majority"; // Add Mongo URL for mongoose connection
const cors = require("cors");
const userRouter = require("./router/userRouter");
const vegetableRouter = require("./router/vegetableRouter");
const orderRouter = require("./router/orderRouter");

// Sign up a node server
const app = express();

app.listen(process.env.PORT, () => {
    console.log("Listening to PORT " + process.env.PORT);
});

app.use(express.json({ extended : false }));
app.use(express.urlencoded({ extended : false }));

mongoose.connect(URI).then(() => console.log("Successful connection to DB")).catch(err => console.log(err));

// Routes set to Node server
app.use(cors());
app.use("/", userRouter);
app.use("/", orderRouter);
app.use("/", vegetableRouter);