import React, { useState } from "react";
import axios from "axios";
import './Product.css';
import data from "../products.json";

function Product() {
  const [products, setProduct] = useState(data);
  axios.get("http://localhost:5000/api/product")
    .then((res) => {
      console.log(res)
    setProduct(res.data)
    }) 
    .catch((err) =>
      console.log(err)
    );
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
                  <span>Stock {p.cantidad}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;