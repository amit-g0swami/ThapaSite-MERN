const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// app config
const app = express();
const port = process.env.PORT;

// db config
require("./db/connection");
app.use(express.json());
app.use(require("./router/auth"));

// middleware
const middleware = (req, res, next) => {
    const user = "user";
    if (user != "") next();
    return
}

// api endpoints
// app.get("/", (req, res) => {
//     res.send("hello")
// })

// listners
app.listen(port, () => {
    console.log(`server is running at ${port}`)
})


