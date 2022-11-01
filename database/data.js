
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
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
   
});
