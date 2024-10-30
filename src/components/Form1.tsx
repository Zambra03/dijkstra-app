import React, { useState, useRef, useEffect } from "react";

function Form1() {
  // Estado para las coordenadas y el nombre del punto
  const [positionX, setPositionX] = useState<number | string>("");
  const [positionY, setPositionY] = useState<number | string>("");
  const [namePunto, setNamePunto] = useState<string>("");

  const inputRef = useRef<HTMLInputElement | null>(null); // Referencia para el input X

  // Efecto para enfocar el campo de entrada X cuando el componente se monta
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previene la acción predeterminada del formulario

    // Aquí puedes manejar los datos, como agregar el punto a una lista o grafo
    console.log(`Punto creado: (${positionX}, ${positionY}) - ${namePunto}`);

    // Limpia los campos después de crear el punto
    setPositionX("");
    setPositionY("");
    setNamePunto("");
  };

  return (
    <form action="#" className="formPuntos form" onSubmit={handleSubmit}>
      <label htmlFor="posicionPunto">
        Posición del punto en coordenadas (x,y){" "}
      </label>
      <div className="formRow">
        <input
          type="number"
          id="positionX"
          min={0}
          max={100}
          placeholder="X"
          value={positionX}
          onChange={(e) => setPositionX(Number(e.target.value))}
          ref={inputRef} // Usamos la referencia aquí
        />
        <input
          type="number"
          id="positionY"
          min={0}
          max={100}
          placeholder="Y"
          value={positionY}
          onChange={(e) => setPositionY(Number(e.target.value))}
        />
      </div>
      <label htmlFor="namePunto">Nombre del punto</label>
      <div className="formRow">
        <input
          type="text"
          id="namePunto"
          placeholder="Nombre del punto"
          value={namePunto}
          onChange={(e) => setNamePunto(e.target.value)}
        />
        <input
          type="submit"
          id="btnCrearV"
          className="btn"
          value="Crear punto"
        />
      </div>
    </form>
  );
}

export default Form1;
