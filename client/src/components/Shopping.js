import React, { useEffect, useState  } from "react";
import axios from "axios";
import Message from "./Message";
function Shopping() {
    var [show, setShow] =  useState(false);
    var [product, setProduct] =  useState([]);
    var [tol, setTol] =  useState(0);
    useEffect(()=> {
        if(localStorage.getItem("products") != null){
     
            setProduct(JSON.parse(localStorage.getItem("products")));
            console.log(product)
            var t=0;
            for (var i = 0; i < product.length; i++) {
                t = t+ (product[i].cantidadOrden *product[i].precio)
            }
            setTol(t);
        }
    })
    
    var children="Se ha agregado correctamente";
    var showModal = () => {
        var sale={  
            idVenta: "",
            fecha:"",
            idCliente:"123123",
            valor:tol.toString(),
            confirmado:"true"
        }
        axios.post("https://nodepapeleria.herokuapp.com/api/Sale/Create",sale)
        .then((res) => {
            if(res.data.idVenta != null){
                var deta=[]
                for (var i = 0; i < product.length; i++) {
                    var d={
                        idDetail:new Date().getTime().toString(),
                        idProducto: product[i].id,
                        cantidad:product[i].cantidadOrden ,
                        valor: (product[i].cantidadOrden *product[i].precio),
                        idVenta: res.data.idVenta 
                    }
                    deta.push(d);
                    product[i].cantidad=(parseInt(product[i].cantidad)-parseInt(product[i].cantidadOrden)).toString()
                    axios.post("https://nodepapeleria.herokuapp.com/api/product/Create",product[i])
                    .then((rep) => {
                        console.log(rep)
                    }) 
                    .catch((err) =>
                      console.log(err)
                      
                    );
                }
                if(deta.length > 0){
                    console.log(deta)
                    axios.post("https://nodepapeleria.herokuapp.com/api/DetailSale/CreateAll",deta)
                    .then((rep) => {
                        console.log(rep)
                        localStorage.removeItem('products');
                        setProduct([])
                        setTol(0)
                    }) 
                    .catch((err) =>
                      console.log(err)
                      
                    );
                }
               
            }
        }) 
        .catch((err) =>
          console.log(err)
        );
        
        setShow(true);
    
    }
    
    var hideModal = () => {
        setShow(false);
    }
    return (
        <div class="container-fluid p-0 mb-5" >
        <Message show={show} handleClose={hideModal} children={children}/>
       <div class="text-center hero my-5 p position-relative" >
         <img class="d-block w-100" src="../img/papeleria.png" alt=""/>
         <div class="carousel-caption">
           <div class="row col-12 h-100">

           <div class="my-2 mx-2 d-flex gap-3">
               <div class="col-9">
                   <table class="table  text-white">
                       <tbody>
                       {product.map((p) => (
                           <tr>
                          <td> 
                           <img src={p.urlImagen}  width="100rem" height="auto gap-2" alt="..."/>
                       </td>
                       <td class="align-middle">
                           <h6 class="ml-1">{p.nombre}</h6>
                       </td>
                       <td class="align-middle">
                           <h6>{p.precio}</h6>
                       </td>
                       <td class="align-middle">
                           <h6>{p.cantidadOrden}</h6>
                       </td>
                       <td class="align-middle">
                           <h6>{(p.cantidadOrden*p.precio)}</h6>
                       </td>
                       </tr>
                            ))}
                      
                       </tbody>
                   </table>
               </div>
               <div class="col-3">
                   <div class="card text-center">
                   <div class="card-body">
                    <h3 class="text-muted">Total </h3>
                    <h4 class="text-muted">{tol}</h4>
                   <div class="text-center">
                       <button class="btn btn-success" onClick={showModal}>comprar</button></div>

                   </div>
               </div>
               </div>
           
           </div>
           </div>
         </div>
       </div>
       </div>
    );
}
export default Shopping;