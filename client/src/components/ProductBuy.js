import React, { useState  } from "react";
import './Product.css';
import Message from "./Message";
import data from "../products.json";
function ProductBuy() {
  var [products] = useState(data);
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
            
            <div className='notes-list'>
              {products.map((p) => (
                <div className='card note'>
                  <img className='icon'  alt={p.nombre} src={p.urlImagen}/>
                  <span>{p.nombre}</span>
                  <span>$ {p.precio}</span>
                  <span>Stock {p.cantidad}</span>
                  <div class="text-center">
                
                  <button class="btn btn-primary" type="button" onClick={showModal}>comprar</button>
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
export default ProductBuy;
