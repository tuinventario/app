import React, { useState  } from "react";
import Message from "./Message";
function Shopping() {
    var [show, setShow] =  useState(false);
    var children="Se ha agregado correctamente";
    var showModal = () => {
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
                        <tr>
                        <td> 
                            <img src="../img/882470265.jpg"  width="100rem" height="auto gap-2" alt="..."/>
                        </td>
                        <td class="align-middle">
                            <h6 class="ml-1">Mochila KL</h6>
                        </td>

                        <td class="align-middle">
                            <h6>$119.900</h6>
                        </td>
                        <td class="align-middle">
                            <h6>Cantidad: 4</h6>
                        </td>
                        <td class="align-middle">
                            <button type="button" class="btn btn-dark">Eliminar</button>
                        </td>
                        </tr>
                        <tr>
                        <td> 
                            <img src="../img/882470265.jpg"  width="100rem" height="auto gap-2" alt="..."/>
                        </td>
                        <td class="align-middle">
                            <h6 class="ml-1">Mochila KL</h6>
                        </td>

                        <td class="align-middle">
                            <h6>$119.900</h6>
                        </td>
                        <td class="align-middle">
                            <h6>Cantidad: 4</h6>
                        </td>
                        <td class="align-middle">
                            <button type="button" class="btn btn-dark">Eliminar</button>
                        </td>
                        </tr>
                        <tr>
                        <td> 
                            <img src="../img/882470265.jpg"  width="100rem" height="auto gap-2" alt="..."/>
                        </td>
                        <td class="align-middle">
                            <h6 class="ml-1">Mochila KL</h6>
                        </td>

                        <td class="align-middle">
                            <h6>$119.900</h6>
                        </td>
                        <td class="align-middle">
                            <h6>Cantidad: 4</h6>
                        </td>
                        <td class="align-middle">
                            <button type="button" class="btn btn-dark">Eliminar</button>
                        </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-3">
                    <div class="card text-center">
                    <div class="card-body">
                     <h3 class="text-muted">Total </h3>
                     <h4 class="text-muted">$119.900</h4>
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