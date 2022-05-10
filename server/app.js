const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// app config 
const app = express();
const port = process.env.PORT || 8001;

// db config
require("./db/connection");

// middleware 
const middleware = (req, res, next) => {
    const user = "user";
    if (user != "") next();
    return
}

// api endpoints
app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/about", middleware, (req, res) => {
    res.send("about")
})

app.get("/contact", (req, res) => {
    res.send("contact")
})

app.get("/signin", (req, res) => {
    res.send("signin")
})

app.get("/signup", (req, res) => {
    res.send("signup")
})

// listners
app.listen(port, () => {
    console.log(`server is running at ${port}`)
})

