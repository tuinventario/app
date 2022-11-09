const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")
const ventasService = require("./ventasService")

const app = express()
const port = 8082


app.use(cors())
app.use(body_parse.json())

const pathName="/ventas"

//obtiene los datos
app.get(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req)
        res.send(ventasService.ventasgetExport())
    }
)

//obtiene los datos por id
app.get(pathName+"/id",

        (req, res)=>{
            console.log("Recibimos peticion")
            let id = req.query.id
            console.log(id)
            res.send(ventasService.ventasgetidExport(id))
        }
    )

//crea un dato 
app.post(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req.body)
        let ventas = ventasService.ventasSetExport(req.body)
        res.send({"mensaje":"Venta Guardada","ventas":ventas})
    }
)
//borra un dato
app.delete(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        let id = req.query.id
        console.log(id)
        let ventas = ventasService.ventasDeleteExport(id)
        res.send({"mensaje":"Venta Guardada","ventas":ventas})
    }
)
//actualiza el dato
app.put(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req.body)
        res.send("Finaliza")
    }
)

app.patch(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req.body)
        res.send("Finaliza")
    }
)


app.listen(port, 
    ()=>{
        console.log("Subio el app vuelo en el puerto "+port)
    }
)