const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

// Load model
const product = require("../models/productModel");
router.get("/", function(req, res) {
    product.find({}, function(err, p){
        res.send(p)
    })
   
});
router.get("/ById/:id", function(req, res) {
    product.find({id:req.params.id}, function(err, p){
        res.send(p)
    })
   
});
router.post("/Create", function(req, res) {
    
    var pro={};
    product.find({id:req.body.id}, function(err, p){
        pro=p; 
        if(p= null){
            console.log(p)
            pro = new product({
                id: req.body.id,
                urlImagen: req.body.urlImagen,
                nombre:req.body.nombre,
                descripcion:req.body.descripcion,
                caracteristicas:req.body.caracteristicas,
                precio:req.body.precio,
                cantidad:req.body.cantidad
            })
            pro.save()
        }
    else{
        
        pro.id= req.body.id;
        pro.urlImagen= req.body.urlImagen;
        pro.nombre=req.body.nombre;
        pro.descripcion=req.body.descripcion;
        pro.caracteristicas=req.body.caracteristicas;
        pro.precio=req.body.precio;
        pro.cantidad=req.body.cantidad;
        product.update(pro);
        
    }
    res.send(pro)
    })
});
module.exports = router;