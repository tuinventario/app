const { Double, Int32 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
id: {
    type: String,
    required: true,
    },
urlImagen: {
type: String,
required: true,
},
nombre: {
type: String,
required: true,
},
descripcion: {
type: String,
required: true,
},
caracteristicas: {
type: String,
default: true,
},
precio: {
type: String,
default: true,
},
cantidad: {
type: String,
default: true,
}
});
module.exports = mongoose.model("Product", ProductSchema,"Product");
