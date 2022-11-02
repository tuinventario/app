import React, { useState  } from "react";
import Message from "./Message";
import data from "../products.json";
import ListProduct from "./ListProduct";
function EditProduct() {
  var [show, setShow] =  useState(false);
  const [products] = useState(data);
  var [select,setSelect] =  useState({
    id: "",
    urlImagen: "",
    nombre: "",
    descripcion: "",
    caracteristicas: "",
    precio: "",
    cantidad:""

  });
  var children="Se ha agregado correctamente";
  var showModal = () => {
    document.getElementById("form").reset();
    setSelect({
        id: "",
        urlImagen: "",
        nombre: "",
        descripcion: "",
        caracteristicas: "",
        precio: "",
        cantidad:""
    
      })
    setShow(true);
  }
  
  var hideModal = () => {
    setShow(false);
  }
  var selectData = (e) => {
    setSelect(products.find(({ id }) => id === e.target.id))
  }
  return (
    <div class="container-fluid p-0 mb-5" >
        <Message show={show} handleClose={hideModal} children={children}/>
      <div class="text-center hero my-5 p position-relative" >
        <img class="d-block w-100" src="../img/papeleria.png" alt=""/>
        <div class="carousel-caption">
          <div class="row col-12 h-100">
          <div class="col-3">
          <ListProduct select={select} selectData={selectData}/>
          </div>    
          <div class="col-9">
          <form method="POST" id="form">
          <table class="table  text-white">
            <tbody>
            <tr>
              <td>
                Nombre
              </td>
              <td>
                <input type="text" class="form-control" field="nombre" name="nombre" value={select.nombre} />
              </td>
            </tr>
            <tr>
              <td>
                Descripcion
              </td>
              <td>
                <input type="text" class="form-control" field="descripcion" name="descripcion"   value={select.descripcion}  />
              </td>
            </tr>
            <tr>
              <td>
                Precio
              </td>
              <td>
                <input type="number" class="form-control" field="precio" name="precio"  value={select.precio}  />
              </td>
            </tr>
            <tr>
              <td>
                Stock
              </td>
              <td>
                <input type="number" class="form-control" field="cantidad"   name="cantidad"  value={select.cantidad}  />
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
    </div>
  );
}

export default EditProduct;