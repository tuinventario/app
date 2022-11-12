import './Sales.css';
import React, { useState } from "react";
import axios from "axios";

function Sales(){
    const [products, setProduct] = useState([]);
  axios.get("/api/Sale")
    .then((res) => {
      console.log(res)
    setProduct(res.data)
    }) 
    .catch((err) =>
      console.log(err)
    );
    return(
        <div class="container-fluid p-0 mb-5" >
        <div class="text-center hero my-5 p position-relative" >
          <img class="d-block w-100" src="../img/papeleria.png" alt=""/>
          <div class="carousel-caption">
            <div class="row col-12 h-100">
            <div class="container my-3">
            <div class="row">
                <div class="col-sn-12 col-md-12 col-lg-12-col-xl-12">
                    <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead class="table-warning table">
                                    <tr>
                                        <th scope="col"  className="centered">Fecha de venta</th>
                                        <th scope="col" className="centered">Id. Venta</th>
                                        <th scope="col" className="centered">Valor</th>  
                                    </tr>
                                </thead>
                                <tbody>
                                {products.map((p) => (
                                    <tr>
                                        <td className="centered text-white">{p.fecha}</td>
                                        <td className="centered text-white">{p.idVenta}</td>
                                        <td className="centered text-white">{p.valor}</td>
                                    </tr>
                                ))}                  
                                </tbody>
                            </table>
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
export default Sales