const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

// Load model
const product = require("../models/productModel");
router.get("/", function(req, res) {
    product.find({}, function(err, p){
        console.log(p)
        res.json(p)
    })
   
});
module.exports = router;