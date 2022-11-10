const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SalesSchema = new Schema({
idVenta: {
    type: String,
    required: true,
},
fecha: {
type: String,
required: true,
},
idCliente: {
type: String,
required: true,
},
valor: {
type: String,
required: true,
},
confirmado: {
type: String,
required: true,
}
});
module.exports = mongoose.model("Sale", SalesSchema,"Sale");
