const express = require("express");
const router = express.Router();

require("../db/connection");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
    res.send("hello")
})

// using Promise 
// router.post("/register", (req, res) => {
//     const { name, email, phone, work, password } = req.body;

//     if (!name || !email || !phone || !work || !password) { return res.status(422).json({ "error": "plz fill the form" }) }

//     User.findOne({ email: email }).then((userExist) => {
//         if (userExist) {
//             return res.status(422).json({ "error": "Email already exist" })
//         }
//         const user = new User({ name, email, phone, work, password });
//         user.save().then(() => {
//             res.status(201).json({ "message": "data pushed successfully" }).catch((err) => res.status(500).json({ "err": "Failed to registered" }))
//         })
//     }).catch(err => { console.log(err) })
// return res.status(200);
// console.log(name, email);
// console.log(req.body.name, req.body.email);
// res.json({ "user": req.body });
// })

// using async await 
router.post("/register", async (req, res) => {
    const { name, email, phone, work, password } = req.body;

    if (!name || !email || !phone || !work || !password) { return res.status(422).json({ "error": "plz fill the form" }) }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ "error": "Email already exist" })
        }
        const user = new User({ name, email, phone, work, password });
        const userRegister = await user.save();
        if (userRegister) {
            res.status(201).json({ "message": "Data pushed successfully" })
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;