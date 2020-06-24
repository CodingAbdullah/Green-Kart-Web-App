const dotenv = require("dotenv").config({ path: '.env' });
const express = require("express");
const app = express();

const router = require("./router/router");

app.listen(process.env.PORT, () => {
    console.log("Listening to PORT 5050");
});

app.use(express.json({extended : false}));
app.use(express.urlencoded({extended : false}));
app.set("view engine", "ejs");
app.set("views", "views");
app.use("/", router);