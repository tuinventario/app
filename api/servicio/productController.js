const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const products = require("../routes/products");
const cors = require("cors")
const app = express();
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
// DB Config
const db = require("../config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(
    db,
    { useNewUrlParser: true }
)
.then(() => console.log("MongoDB successfullynected"))
.catch(err => console.log(err));
// Routes
app.use(cors())
app.use("/api/product", products);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and runing on port ${port} !`));