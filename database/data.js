
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:aseder324@cluster0.bjg0rqa.mongodb.net";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo= db.db("mydb");
    dbo.createCollection("Product", function(err, res){
        if (err) throw err;
        console.log("Product created!");
        db.close();
    });
    dbo.createCollection("Client", function(err, res){
        if (err) throw err;
        console.log("Client created!");
        db.close();
    });
    dbo.createCollection("Sale", function(err, res){
        if (err) throw err;
        console.log("Sale created!");
        db.close();
    });
    dbo.createCollection("DetailSale", function(err, res){
        if (err) throw err;
        console.log("DetailSale created!");
        db.close();
    });
    var myobj = { 
        id: "GGOEAFKA087499",
        urlImagen: "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
        nombre: "Android Small Removable Sticker Sheet",
        descripcion: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        caracteristicas: "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
        precio: "2.99",
        cantidad:"3"
    };
    dbo.collection("Product").insertOne(myobj, function(e,r){
        if (e) throw e;
        console.log("product insert")
       
    });
});
