import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import "./assets/css/style.css";

import { useState, useRef } from "react";
import {
  clearInformation,
  drawVertex,
  drawEdge,
} from "./components/CanvasComponent";

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [routeResult, setRouteResult] = useState<{
    weight: number;
    path: string;
  }>({
    weight: 0,
    path: "",
  });

  const handleClearCanvas = () => {
    // Llama a la función clearInformation desde el CanvasComponent
    clearInformation(canvasRef, 600); // Asegúrate de definir clearInformation
  };

  const handleCreateVertex = (x: number, y: number, name: string) => {
    // Asegúrate de que el canvasRef y el contexto sean accesibles
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        console.log("Antes de crear el punto");
        drawVertex(ctx, x, y, 7, name); // Pasa el contexto aquí
        console.log("Despues de crear el punto");
        // Asegúrate de que estas funciones estén bien definidas y sean accesibles
      } else {
        alert("Error al obtener el contexto del canvas.");
      }
    } else {
      alert("Error al crear el vértice.");
    }
  };

  const handleCreateEdge = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    peso: number
  ) => {
    // Asegúrate de que el canvasRef y el contexto sean accesibles
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        console.log("Antes de crear la arista o linea");
        drawEdge(ctx, x1, y1, x2, y2, peso, 600, false); // Pasa el contexto aquí
        console.log("Despues de crearla arista");
        // Asegúrate de que estas funciones estén bien definidas y sean accesibles
      } else {
        alert("Error al obtener el contexto del canvas.");
      }
    } else {
      alert("Error al crear la arista.");
    }
  };

  const handleCreateRoute = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    // Asegúrate de que el canvasRef y el contexto sean accesibles
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        console.log("Antes de crear la arista o linea");
        drawEdge(ctx, x1, y1, x2, y2, null, 600, true); // Pasa el contexto aquí
        console.log("Despues de crearla arista");
        // Asegúrate de que estas funciones estén bien definidas y sean accesibles
      } else {
        alert("Error al obtener el contexto del canvas.");
      }
    } else {
      alert("Error al crear la arista.");
    }
  };

  const handleRouteCalculated = (result: { weight: number; path: string }) => {
    setRouteResult(result); // Guardar el resultado en el estado
  };

  // jsx ->
  return (
    <section>
      <Header />
      <div className="container1">
        <Section1
          onCreateVertex={handleCreateVertex}
          onCreateEdge={handleCreateEdge}
          onCreateRoute={handleCreateRoute}
          onRouteCalculated={handleRouteCalculated} // Pasa la función de App aquí
        />
        <Section2 canvasRef={canvasRef} />
        <Section4 result={routeResult} />
      </div>
      <div className="container2">
        <Section3 onClearCanvas={handleClearCanvas} />
      </div>
    </section>
  );
}
export default App;
