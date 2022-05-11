const express = require("express");
const router = express.Router();

require("../db/connection");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
    res.send("hello")
})

router.post("/register", (req, res) => {
    const { name, email, phone, work, password } = req.body;

    if (!name || !email || !phone || !work || !password) { return res.status(422).json({ "error": "plz fill the form" }) }

    User.findOne({ email: email }).then((userExist) => {
        if (userExist) {
            return res.status(422).json({ "error": "Email already exist" })
        }
        const user = new User({ name, email, phone, work, password });
        user.save().then(() => {
            res.status(201).json({ "message": "data pushed successfully" }).catch((err) => res.status(500).json({ "err": "Failed to registered" }))
        })
    }).catch(err => { console.log(err) })
    // return res.status(200);
    // console.log(name, email);
    // console.log(req.body.name, req.body.email);
    // res.json({ "user": req.body });
})

module.exports = router;