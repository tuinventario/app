const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DetailSaleSchema = new Schema({
idDetail: {
    type: String,
    required: true,
},
idProducto: {
type: String,
required: true,
},
cantidad: {
type: String,
required: true,
},
valor: {
type: String,
required: true,
},
idVenta: {
    type: String,
    required: true,
    }
});
module.exports = mongoose.model("DetailSale", DetailSaleSchema,"DetailSale");
