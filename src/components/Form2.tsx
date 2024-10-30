import React, { useState, useRef, useEffect } from "react";

function Form2() {
  const inputRef = useRef<HTMLInputElement | null>(null); // Referencia para el input X

  // Efecto para enfocar el campo de entrada X cuando el componente se monta
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form action="#" className="formCaminos form">
      <label htmlFor="initialP" className="labelPuntoInicial">
        Punto inicial
      </label>
      <div className="divPuntoInicial">
        <select id="initialP"></select>
      </div>

      <label htmlFor="finalP">Punto final</label>
      <div className="divPuntoFinal">
        <select id="finalV"></select>
      </div>

      <div className="btnCrearCamino">
        <input
          type="submit"
          id="btnCrearE"
          value="Crear camino"
          className="btn"
        ></input>
      </div>
    </form>
  );
}

export default Form2;
