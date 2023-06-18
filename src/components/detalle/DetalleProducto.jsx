import axios from "axios";
import { useState, useEffect } from "react";
import Catalogo from "../catalogo/Catalogo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./detalleProducto.css";

const DetalleProducto = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((response) => {
      setChars(response.data);
    });
  }, []);

  return (
    <div className="text-center container-fluid">
      <h1>Destacados</h1>
      <div className="row">
        {chars.map((char) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={char.id}>
            <div style={{ margin: 10 }}>
              <Catalogo data={char} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetalleProducto;
