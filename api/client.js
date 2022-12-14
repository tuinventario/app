const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./keys");
// Load input validation
const validateRegisterInput =
require("./register");
const validateLoginInput =
require("./login");

// Load model
const client = require("./clientModel");
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
    return res.status(400).json(errors);
    }
    client.findOne({ email: req.body.email }).then(user => {
     if (user) 
     {
        return res.status(400).json({ email: "Email already exists"});
     } 
     else {
        const newUser = new client({
            idClient: new Date().getTime().toString(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            rol:req.body.rol
        });
    // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => res.json(user))
            .catch(err => console.log(err));
        });
        });
    }
    });
});

router.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
    return res.status(400).json(errors);
    }
    const email = req.body.email;
    var password = req.body.password;
    
    // Find user by email
    client.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
    return res.status(404).json({ emailnotfound: "Email not found" });
    }
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            password = hash;
        });
        });
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
            // User matched
            // Create JWT Payload
            const payload = {
            id: user.id,
            name: user.name,
            rol: user.rol?user.rol:""
            };
            // Sign token
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                    res.json({
                    success: true,
                    token: "Bearer " + token
                    });
                }
            );
        } 
        else {
            return res.status(400).json({ passwordincorrect: "Password incorrect" });
        }
    });
    });
});
module.exports = router;

     