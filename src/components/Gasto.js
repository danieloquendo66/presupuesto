import React from "react";

const Gasto = ({ gasto }) => {
  return (
    <li className="gastos">
      <p>
        {gasto.nombre}

        <span className="gasto">$ {parseInt(gasto.cantidad)} </span>
      </p>
    </li>
  );
};

export default Gasto;
