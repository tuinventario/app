const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ClientSchema = new Schema({
idClient: {
    type: String,
    required: true,
    },
name: {
type: String,
required: true,
},
email: {
type: String,
required: true,
},
password: {
type: String,
required: true,
},
date: {
type: Date,
default: Date.now,
},
identificacion: {
    type: String,
    required: false,
    },
rol: {
    type: String,
    required: false,
    }
});
module.exports = mongoose.model("Client", ClientSchema,"Client");