import React, { useState, useRef, useEffect } from "react";
import AlgorithmDijsktra from "./AlgorithmDijsktra";

interface Form3Props {
  coordenadas: Record<string, [number, number]>;
  grafo: Record<string, Record<string, number>>;
  onCreateRoute: (x1: number, y1: number, x2: number, y2: number) => void; //;
}

function Form3({ coordenadas, grafo, onCreateRoute }: Form3Props) {
  const inputRef = useRef<HTMLInputElement | null>(null); // Referencia para el input X

  const [initialPC, setInitialPC] = useState<string>("");
  const [finalPC, setFinalPC] = useState<string>("");

  // Efecto para enfocar el campo de entrada X cuando el componente se monta
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Maneja el envío del formulario
  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      initialPC !== "" &&
      finalPC !== "" &&
      initialPC !== null &&
      finalPC !== null
    ) {
      console.log("Entre al primer if del fomr3");
      if (initialPC !== finalPC) {
        console.log("Entre al segundo if del fomr3");
        const dks = AlgorithmDijsktra(grafo, initialPC, finalPC);
        const distance = dks["distancia"];
        const route = dks["ruta"];

        // Suponiendo que tienes un contexto de canvas para llamar a drawEdge
        for (let i = 0; i < route.length; i++) {
          if (i < route.length - 1) {
            onCreateRoute(
              coordenadas[route[i]][0],
              coordenadas[route[i]][1],
              coordenadas[route[i + 1]][0],
              coordenadas[route[i + 1]][1]
            );
          }
        }

        // Muestra la distancia en la interfaz
        alert(`Peso total: ${distance}\nRuta: (${route.join(", ")})`);
      } else {
        alert("¡Ya estás en tu destino!");
      }
    } else {
      alert("Por favor introduce los datos.");
    }
  };

  return (
    <form action="#" className="formCalculate form" onSubmit={handleSubmit2}>
      <label htmlFor="initialPC" className="labelPuntoInicial">
        Punto inicial{" "}
      </label>
      <div className="divPuntoInicial">
        <select
          id="initialPC"
          value={initialPC}
          onChange={(e) => setInitialPC(e.target.value)}
        >
          <option value="">Seleccione un punto</option>
          {Object.keys(coordenadas).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>

      <label htmlFor="finalPC">Punto final</label>
      <div className="divPuntoFinal">
        <select
          id="finalPC"
          value={finalPC}
          onChange={(e) => setFinalPC(e.target.value)}
        >
          <option value="">Seleccione un punto</option>
          {Object.keys(coordenadas).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>

      <div className="btnCrearRuta">
        <input
          type="submit"
          id="btnCalcRoute"
          value="Calcular ruta"
          className="btn"
        ></input>
      </div>
    </form>
  );
}

export default Form3;
