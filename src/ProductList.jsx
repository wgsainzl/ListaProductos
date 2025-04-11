import { useState, useEffect } from "react";
import "./CSS/Styles.css";
import med1 from "./Images/Ibuprofeno.png";
import med2 from "./Images/Tylenol.jpeg";
import med3 from "./Images/Antifludes.jpg";
import med4 from "./Images/Diprospan.jpg";
import med5 from "./Images/Loratadina.jpg";
import med6 from "./Images/Voltaren.png";

const ProductList = () => {
  const [products, setProducts] = useState([]); //useState se utiliza para crear el arreglo de todos los productos y poder mostrarlos

  useEffect(() => { //useEffect se utiliza para hacer una funcionalidad tras el renderizado, en este caso se espera 1 seunda y muestra todo
    setTimeout(() => {
      setProducts([
        {
          name: "Ibuprofeno",
          desc: "10 cápsulas, 400 mg",
          price: 149.99,
          image: med1,
        },
        {
          name: "Tylenol",
          desc: "40 tabletas, 500 mg",
          price: 189.99,
          image: med2,
        },
        {
          name: "Antiflu-Des",
          desc: "6 sobres, 2 cápsulas",
          price: 119.99,
          image: med3,
        },
        {
          name: "Diprospan",
          desc: "Inyectable, 1 ml",
          price: 349.99,
          image: med4,
        },
        {
          name: "Loratadina",
          desc: "10 tabletas, 10 mg",
          price: 199.99,
          image: med5,
        },
        {
          name: "Voltaren",
          desc: "Emulgel, 100 g",
          price: 264.99,
          image: med6,
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="card-container">
      {products.map((product) => ( //map se utiliza para iterar en el arreglo de productos
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} className="med" />
          <div className="container">
            <h4>
              <b>{product.name}</b>
            </h4>
            <p>{product.desc}</p>
            <button
              className="med-btn"
              onClick={() => alert(`Agregado ${product.name} al carrito`)}
            >
              Agregar al carrito – MXN {product.price.toFixed(2)}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
