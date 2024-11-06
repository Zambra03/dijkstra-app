import React, { useState, useRef, useEffect } from "react";

interface Form1Props {
  onCreateVertex: (x: number, y: number, name: string) => void; // Nueva prop
  coordenadas: { [key: string]: number[] }; // Prop para almacenar coordenadas
  grafo: Record<string, Record<string, number>>; // Cambiar el tipo de grafo aquí
  setCoordenadas: React.Dispatch<
    React.SetStateAction<Record<string, [number, number]>>
  >;
  setGrafo: React.Dispatch<
    React.SetStateAction<Record<string, Record<string, number>>>
  >; // Cambiar el tipo de setGrafo aquí
}

function Form1({
  onCreateVertex,
  coordenadas,
  grafo,
  setCoordenadas,
  setGrafo,
}: Form1Props) {
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
    e.preventDefault();
    const x = Number(positionX);
    const y = Number(positionY);
    const nameV = namePunto;

    if (
      x >= 0 &&
      y >= 0 &&
      x <= 100 &&
      y <= 100 &&
      nameV !== "" &&
      !isNaN(x) &&
      !isNaN(y)
    ) {
      console.log("Entre al primer if del form1");
      let existe = false;
      let mensajeError = "";

      if (Object.keys(coordenadas).length > 0) {
        console.log("Entre al segundo if del form1");
        // Validar que las coordenadas no existan ya en el grafo
        for (const vertice in coordenadas) {
          for (let i: number = 0; i < coordenadas[vertice].length; i++) {
            if (
              coordenadas[vertice][0] === x &&
              coordenadas[vertice][1] === y
            ) {
              existe = true;
              mensajeError += `Ya existen las coordenadas (${x}, ${y}) | `;
              resetForm();
              break;
            }
          }
        }

        // Validar que el nombre del vértice no exista
        if (nameV in grafo) {
          existe = true;
          mensajeError += `Ya existe un vértice con el nombre ${nameV} | `;
          resetForm();
        }

        if (!existe) {
          setCoordenadas((prev) => ({ ...prev, [nameV]: [x, y] }));
          setGrafo((prev) => ({ ...prev, [nameV]: {} }));
          console.log("Antes de crear el punto");
          onCreateVertex(x, y, nameV);
          // Espacio para borrar la data en los input y select
          resetForm();
        } else {
          alert(mensajeError);
        }
      } else {
        console.log("Entre al else del segundo if del form1");
        setCoordenadas((prev) => ({ ...prev, [nameV]: [x, y] }));
        setGrafo((prev) => ({ ...prev, [nameV]: {} }));
        onCreateVertex(x, y, nameV);
        console.log("Volvi a Entrar al else del segundo if del form1");
        // Espacio para borrar la data en los input y select
        resetForm();
        console.log("Despues de clear formdata");
      }
    } else {
      alert("Por favor introduce todos los datos.");
    }
  };

  // Función para restablecer el formulario y enfocar el input X
  const resetForm = () => {
    setPositionX("");
    setPositionY("");
    setNamePunto("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
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
      <label className="namePunto" htmlFor="namePunto">
        Nombre del punto
      </label>
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
          className="btnForm1"
          value="Crear punto"
        />
      </div>
    </form>
  );
}

export default Form1;
