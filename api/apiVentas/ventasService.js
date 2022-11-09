let ventas = require("./ventas.json")


const ventasGet = () =>{

    return ventas

}

const ventasSet = (venta) =>{
    ventas.push(venta)
    return ventas

}

const ventasDelete = (id) =>{
    console.log(ventas)
    ventas = ventas.filter((vuel)=>{
        return vuel.id != id
    }
    )
    console.log(ventas)
    return ventas
}

const ventasgetid = (id) =>{

    let venta = ventas.find(

        (elemento)=>{
            return elemento.id === id
        }

    )

    return venta
}


// const productoReservadas = (producto, idventa)=>{

//     for (let i = 0; i< ventas.length; i++){
//         if(idventa === ventas[i].id){
//             for (let iventa = 0; iventa< ventas[i].silla.length; iventa++){
//                 for (let j = 0; j < producto.length; j++){
//                     if(ventas[i].silla[iventa].categoria === producto[j].categoria){
//                         ventas[i].silla[iventa].silla -= producto[j].silla
//                     }
//                 }
//             }
//             i=ventas.length
//         }
//     }

//     return "venta reservada"

//}

module.exports.ventasgetExport = ventasGet;
module.exports.ventasSetExport = ventasSet;
module.exports.ventasDeleteExport = ventasDelete;
module.exports.ventasgetidExport = ventasgetid;
//module.exports.productoReservadasExport = productoReservadas;