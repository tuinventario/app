import React, { useState } from "react";
import './Product.css';
import data from "../products.json";
import Button from "react-bootstrap/Button";

function comprar() {
  const [products, setProducts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    urlImagen: "",
    nombre: "",
    descripcion: "",
    caracteristicas: "",
    precio:""
  });

  return (
    <div class="container-fluid p-0 mb-5" >
      <div class="text-center hero my-5 p position-relative" >
        <img class="d-block w-100" src="../img/papeleria.png" alt=""/>
        <div class="carousel-caption">
          <div class="row col-12 h-100">
            <div className='notes-list'>
              {products.map((p) => (
                <div className='card note'>
                  <img className='icon'  alt={p.nombre} src={p.urlImagen}/>
                  <span>{p.nombre}</span>
                  <span>$ {p.precio}</span>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button class="btn btn-primary me-md-2" type="button">comprar</button>
                  <button class="btn btn-primary" type="button">comprar</button>
                 </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default comprar;
