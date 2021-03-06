const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const middleware = require("../middleware/middleware");

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
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) { return res.status(422).json({ "error": "plz fill the form" }) }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ "error": "Email already exist" })
        } else if (password !== cpassword) {
            return res.status(422).json({ "error": "Password does't matched" })
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });
            // const userRegister = await user.save();
            // if (userRegister) {
            //     res.status(201).json({ "message": "Data pushed successfully" })
            // }
            await user.save();
            res.status(201).json({ "message": "Data pushed successfully" })
        }
    } catch (err) {
        console.log(err)
    }
})

// login route 
router.post('/signin', async (req, res) => {
    // console.log(req.body)
    // res.status(200).json({ "user": "logged in" })
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ "user": "fill the data" })
        }
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const checkPassword = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            res.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            if (!checkPassword) {
                res.status(400).json({ error: "invalid Password" })
            } else {
                res.json({ "user": "user signin successfully" })
            }
        } else {
            res.status(400).json({ error: "user not exist" })
        }
    } catch (err) {
        console.log(err)
    }
})

// about  
router.get('/about', middleware, (req, res) => {
    res.send(req.userData);
});

// contact
router.post('/contact', middleware, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            console.log("error")
            res.status(400).json({ "user": "fill the form" })
        }
        const userContact = await User.findOne({ _id: req.userID });
        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);
            await userContact.save();
            res.status(200).json({ message: "message pushed" })
        }

    } catch (err) {
        console.log(err)
    }
});

//home
router.get('/home', middleware, (req, res) => {
    res.send(req.userData);
});

// logout  
router.get('/logout', (req, res) => {
    res.clearCookie("jwttoken", { path: "/" })
    res.status(200).send("logout");
});

module.exports = router;