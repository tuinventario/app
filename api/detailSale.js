const express = require("express");
const router = express.Router();
const keys = require("./keys");

// Load model
const detailSales = require("./detailSaleModel");
router.get("/", function(req, res) {
    detailSales.find({}, function(err, p){
        res.send(p)
    })
   
});
router.get("/ById/:id", function(req, res) {
    detailSales.find({idDetail:req.params.id}, function(err, p){
        res.send(p)
    })
   
});
router.delete("/:id", function(req, res) {
    detailSales.deleteOne({idDetail:req.params.id}, function(err, p){
        res.send(p)
    })
   
});
router.post("/CreateAll", function(req, res) {
    detailSales.create(
        req.body,
        function (err, docs) { 
            if (err){ 
                console.log(err) 
            } 
            else{ 
                console.log("Create detail : ", docs);
                res.send(docs) 
            } 
        }
    )
});
router.post("/Create", function(req, res) {
    var pro={};
    pro = new detailSales({
        idDetail: req.body.idVenta!=""?req.body.idDetail:new Date().getTime().toString(),
        idProducto: req.body.idProducto,
        cantidad:req.body.idCliente,
        valor:req.body.valor,
    })
    if(req.body.idVenta != ""){
        try{
            detailSales.findOneAndUpdate({idVenta:req.body.idVenta}, 
            {
                $set: { 
                    idProducto:req.body.idProducto,
                    cantidad:req.body.cantidad,
                    valor:req.body.valor
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