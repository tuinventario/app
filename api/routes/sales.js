const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

// Load model
const sales = require("../models/SalesModel");
router.get("/", function(req, res) {
    sales.find({}, function(err, p){
        res.send(p)
    })
   
});
router.get("/ById/:id", function(req, res) {
    sales.find({idVenta:req.params.id}, function(err, p){
        res.send(p)
    })
   
});
router.delete("/:id", function(req, res) {
    sales.deleteOne({idVenta:req.params.id}, function(err, p){
        res.send(p)
    })
   
});
router.post("/Create", function(req, res) {
    var pro={};
    pro = new sales({
        idVenta: req.body.idVenta!=""?req.body.idVenta:new Date().getTime().toString(),
        fecha: req.body.fecha!=""?req.body.fecha:new Date().toISOString(),
        idCliente:req.body.idCliente,
        valor:req.body.valor,
        confirmado:req.body.confirmado
    })
    if(req.body.idVenta != ""){
        try{
            sales.findOneAndUpdate({idVenta:req.body.idVenta}, 
            {
                $set: { 
                    fecha: req.body.fecha!=""?req.body.fecha:new Date().toISOString(),
                    idCliente:req.body.idCliente,
                    valor:req.body.valor,
                    confirmado:req.body.confirmado
                } 
            },
            function (err, docs) { 
                if (err){ 
                    console.log(err) 
                } 
                else{ 
                    console.log("Updated sale : ", docs); 
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