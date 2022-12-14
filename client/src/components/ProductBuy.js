import React, { useState,useEffect  } from "react";
import './Product.css';
import Message from "./Message";
import axios from "axios";
function ProductBuy() {
  var [products, setProduct] = useState([]);
  var [show, setShow] =  useState(false);
  useEffect(() => {
  axios.get("https://nodepapeleria.herokuapp.com/api/product")
  .then((res) => {
  setProduct(res.data.filter(element => element.cantidad > 0))
  }) 
  .catch((err) =>
    console.log(err)
  );
  });
  var children="Se ha agregado correctamente";
  var showModal = (e) => {
    axios.get("https://nodepapeleria.herokuapp.com/api/product/ById/"+e.target.id)
    .then((res) => {
      res.data[0].cantidadOrden=document.getElementById("select"+e.target.id).value
      
      console.log()
      var detail = [];
      console.log(localStorage.getItem("products"))
      if(localStorage.getItem("products") != null){
        detail =JSON.parse(localStorage.getItem("products"));
      }
      else{
        detail.push(res.data[0]);
      }
      if(detail.filter(element => element.id === e.target.id).length > 0){
        var objIndex = detail.findIndex((obj => obj.id === e.target.id));
        detail[objIndex] =res.data[0];
       
      }
      else{
        detail.push(res.data[0]);
      }
      localStorage.setItem("products", JSON.stringify(detail));
      setShow(true);
    }) 
    .catch((err) =>
      console.log(err)
    );
    
  }
  var myFunction = (p) => {
    var myArray = [];
    for (var i = 0; i < p; i++) {
      myArray[i] = (
      <option value={i+1}>{i+1}</option>
      );
    }
    return myArray;
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
                  <span>Stock 
                    <select id={("select"+p.id)} class="form-control">
                      {myFunction(p.cantidad)}
                    </select>
                   
                  </span>
                  <div class="text-center">
                
                  <button class="btn btn-primary" id={p.id} type="button" onClick={showModal}>comprar</button>
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
