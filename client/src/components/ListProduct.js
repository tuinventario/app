import React,{ useState  } from "react";
import './Product.css';
import data from "../products.json";
const ListProduct = ({ selectData }) => {
  const [products] = useState(data);
 
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