import React, { useState  } from "react";
import Message from "./Message";
import axios from "axios";
import ListProduct from "./ListProduct";
function EditProduct() {
  var [show, setShow] =  useState(false);
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
    var elements = document.getElementById("form").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }
    console.log(obj)
    axios
    .post('https://nodepapeleria.herokuapp.com/api/product/Create', obj)
    .then(() => {
      console.log('product Created')})
    .catch(err => {
      console.error(err);
    });
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
  const handleChange = (e) => {
    setSelect({ ...select, [e.target.name]: e.target.value });
  };
  var hideModal = () => {
    setShow(false);
  }
  var selectData = (e) => {
    axios.get("https://nodepapeleria.herokuapp.com/api/product/ById/"+e.target.id)
    .then((res) => {
      setSelect(res.data[0])
    }) 
    .catch((err) =>
      console.log(err)
    );
    //setSelect(products.find(({ id }) => id === e.target.id))
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
          <input type="hidden" class="form-control" field="id" name="id" value={select.id} />
          <input type="hidden" class="form-control" field="urlImagen" name="urlImagen" value={select.urlImagen} />
              
          <table class="table  text-white">
            <tbody>
            <tr>
              <td>
                Nombre
              </td>
              <td>
                <input type="text" class="form-control" field="nombre" name="nombre" value={select.nombre}  onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                Descripcion
              </td>
              <td>
                <input type="text" class="form-control" field="descripcion" name="descripcion"   value={select.descripcion}  onChange={handleChange}  />
              </td>
            </tr>
            <tr>
              <td>
                Precio
              </td>
              <td>
                <input type="number" class="form-control" field="precio" name="precio"  value={select.precio}   onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <td>
                Stock
              </td>
              <td>
                <input type="number" class="form-control" field="cantidad"   name="cantidad"  value={select.cantidad}  onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td colspan="2" class="text-center">
                <input class="btn btn-primary" type="button" value="Guardar" onClick={showModal} />

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