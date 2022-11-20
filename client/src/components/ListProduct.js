import React,{ useState  } from "react";
import axios from "axios";
import './Product.css';
const ListProduct = ({ selectData }) => {
  const [products,setProduct] = useState([]);
  axios.get("https://nodepapeleria.herokuapp.com/api/product")
  .then((res) => {
    setProduct(res.data)
  }) 
  .catch((err) =>
    console.log(err)
  );
  return (
    
    <div className='card text-dark'>
        <h3>Productos</h3>
    {products.map((p) => (
        <button id={p.id} type="button" className="p-3" onClick={selectData}>{p.nombre}</button>
    ))}
  </div>
  );
}

export default ListProduct;