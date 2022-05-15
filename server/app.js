const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');

dotenv.config({ path: "./config.env" });
// app config
const app = express();
const port = process.env.PORT;

app.use(cookieParser());

// db config
require("./db/connection");
app.use(express.json());
app.use(require("./router/auth"));

// middleware
// const middleware = (req, res, next) => {
//     const user = "user";
//     if (user != "") next();
//     return
// }

// api endpoints
// app.get("/", (req, res) => {
//     res.send("hello")
// })

// listners
app.listen(port, () => {
    console.log(`server is running at ${port}`)
})


