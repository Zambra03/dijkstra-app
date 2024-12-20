import React, { useState, useRef, useEffect } from "react";
import AlgorithmDijsktra from "./AlgorithmDijsktra";
import RutaLarga from "./LongRoute";

interface Form3Props {
  coordenadas: Record<string, [number, number]>;
  grafo: Record<string, Record<string, number>>;
  onCreateRoute: (x1: number, y1: number, x2: number, y2: number) => void; //;
  onRouteCalculated: (result: { weight: number; path: string }) => void;
  onLongRoute: (result: { weight: number; path: string }) => void;
}

function Form3({
  coordenadas,
  grafo,
  onCreateRoute,
  onRouteCalculated,
  onLongRoute,
}: Form3Props) {
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
        const distance = Number(dks["distancia"]);
        const route = dks["ruta"].slice().reverse(); // Invertir el arreglo para el orden correcto
        const rml = RutaLarga(grafo, initialPC, finalPC);
        const distancelarge = Number(rml["distancia"]);
        const routelarge = rml["ruta"].slice().reverse(); // Invertir el arreglo para el orden correcto

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
        // Enviar el resultado a través de onRouteCalculated
        onRouteCalculated({ weight: distance, path: route.join(" -> ") });
        onLongRoute({ weight: distancelarge, path: routelarge.join(" -> ") });
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
          <option value="">Elige un punto</option>
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
          <option value="">Elige un punto</option>
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
