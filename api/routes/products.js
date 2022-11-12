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
    pro = new product({
        id: req.body.id!=""?req.body.id:new Date().getTime().toString(),
        urlImagen: req.body.urlImagen!=""?req.body.urlImagen:"https://mockupgratis.com/wp-content/uploads/2019/07/Mockup_Identidad_Corporativa_Papeleria_mockupgratis.com_-1024x683.jpg",
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        caracteristicas:req.body.id != ""?"Producto actualizado":"Producto nuevo",
        precio:req.body.precio,
        cantidad:req.body.cantidad
    })
    if(req.body.id != ""){
        try{
        product.findOneAndUpdate({id:req.body.id}, 
            {
                $set: { 
                    urlImagen: req.body.urlImagen!=""?req.body.urlImagen:"default",
                    nombre:req.body.nombre,
                    descripcion:req.body.descripcion,
                    caracteristicas:req.body.id != ""?"Producto actualizado":"Producto nuevo",
                    precio:req.body.precio,
                    cantidad:req.body.cantidad
                } 
            },
            function (err, docs) { 
                if (err){ 
                    console.log(err) 
                } 
                else{ 
                    console.log("Updated product : ", docs); 
                } 

        });
        }
        catch (e) {
            console.log(e);
         }
    }
    else
    {
        pro.save()
    }
    res.send(pro)
});
module.exports = router;