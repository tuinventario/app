const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const products = require("./routes/products");
const sales = require("./routes/sales");
const detailSales = require("./routes/detailSale");
const client = require("./routes/client");
const passport = require("passport");
const cors = require("cors")
const app = express();
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
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
app.use("/api/Sale", sales);
app.use("/api/DetailSale", detailSales);
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./routes/passport")(passport);
// Routes
app.use("/api/client", client);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and runing on port ${port} !`));

