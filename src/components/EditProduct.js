import React, { useState  } from "react";
import Message from "./Message";
function EditProduct() {
  var [show, setShow] =  useState(false);
  var children="Se ha agregado correctamente";
  var showModal = () => {
    document.getElementById("form").reset();
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
          <form method="POST" id="form">
          <table class="table  text-white">
            <tbody>
            <tr>
              <td>
                Nombre
              </td>
              <td>
                <input type="text" class="form-control" field="nombre"  />
              </td>
            </tr>
            <tr>
              <td>
                Descripcion
              </td>
              <td>
                <input type="text" class="form-control" field="descripcion"   />
              </td>
            </tr>
            <tr>
              <td>
                Precio
              </td>
              <td>
                <input type="number" class="form-control" field="precio"  />
              </td>
            </tr>
            <tr>
              <td>
                Stock
              </td>
              <td>
                <input type="number" class="form-control" field="cantidad"  />
              </td>
            </tr>
            <tr>
              <td colspan="2" class="text-center">
                <input class="btn btn-primary" type="button" value="Guardar" onClick={showModal}/>

              </td>
            </tr>
            </tbody>
          </table>
          </form>


          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;