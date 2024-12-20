import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

interface Section1Props {
  //onClearCanvas: () => void; // Prop para limpiar el canvas
  onCreateVertex: (x: number, y: number, name: string) => void; // Prop para crear un vértice
  onCreateEdge: (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    peso: number
  ) => void; //
  onCreateRoute: (x1: number, y1: number, x2: number, y2: number) => void; //;
  onRouteCalculated: (result: { weight: number; path: string }) => void; // Nueva prop
  onLongRoute: (result: { weight: number; path: string }) => void;
  // Agrega las propiedades nuevas aquí
  coordenadas: Record<string, [number, number]>;
  grafo: Record<string, Record<string, number>>;
  aristas: [string, string][];
  setCoordenadas: React.Dispatch<
    React.SetStateAction<Record<string, [number, number]>>
  >;
  setGrafo: React.Dispatch<
    React.SetStateAction<Record<string, Record<string, number>>>
  >;
  setAristas: React.Dispatch<React.SetStateAction<[string, string][]>>;
}

function Section1({
  onCreateVertex,
  onCreateEdge,
  onCreateRoute,
  onRouteCalculated,
  onLongRoute,
  coordenadas, // Recibe las coordenadas
  grafo, // Recibe el grafo
  aristas, // Recibe las aristas
  setCoordenadas, // Recibe setCoordenadas
  setGrafo, // Recibe setGrafo
  setAristas, // Recibe setAristas
}: Section1Props) {
  // Estado para controlar la visibilidad del formulario
  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);

  const ClickPunto = () => {
    setTimeout(() => {
      setShowForm(true);
    }, 300); // Retraso de 300 ms
    setShowForm1(false);
    setShowForm2(false);
    console.log("Form Punto desplegado correctamente");
  };

  const ClickCamino = () => {
    setShowForm(false);
    setTimeout(() => {
      setShowForm1(true);
    }, 300); // Retraso de 300 ms
    setShowForm2(false);
    console.log("Form Camino desplegado correctamente");
  };

  const ClickRuta = () => {
    setShowForm(false);
    setShowForm1(false);
    setTimeout(() => {
      setShowForm2(true);
    }, 300); // Retraso de 300 ms
    console.log("Form Ruta desplegado correctamente");
  };

  return (
    <div className="section1">
      <p className="titulo">¿Qué quieres crear?</p>
      <button
        id="btnCrearPunto"
        className="btn-opcion punto"
        onClick={ClickPunto}
      >
        <i
          className="fa-solid fa-circle"
          style={{ marginRight: "7px", fontSize: "7px" }}
        ></i>
        Punto
      </button>
      <button
        id="btnCrearCamino"
        className="btn-opcion camino"
        onClick={ClickCamino}
      >
        <i
          className="fa-solid fa-share-nodes"
          style={{ marginRight: "7px", fontSize: "15px" }}
        ></i>
        Camino
      </button>
      <button id="btnCrearRuta" className="btn-opcion ruta" onClick={ClickRuta}>
        <i
          className="fa-solid fa-route"
          style={{ marginRight: "7px", fontSize: "15px" }}
        ></i>
        Ruta
      </button>
      <div className={`form-container ${showForm ? "slide-down" : ""}`}>
        {showForm && (
          <Form1
            onCreateVertex={onCreateVertex}
            coordenadas={coordenadas}
            grafo={grafo}
            setCoordenadas={setCoordenadas}
            setGrafo={setGrafo}
          />
        )}
      </div>
      <div className={`form-container1 ${showForm1 ? "slide-down1" : ""}`}>
        {showForm1 && (
          <Form2
            coordenadas={coordenadas}
            aristas={aristas}
            setAristas={setAristas}
            grafo={grafo}
            setGrafo={setGrafo}
            onCreateEdge={onCreateEdge}
          />
        )}
      </div>
      <div className={`form-container1 ${showForm2 ? "slide-down1" : ""}`}>
        {showForm2 && (
          <Form3
            coordenadas={coordenadas}
            grafo={grafo}
            onCreateRoute={onCreateRoute}
            onRouteCalculated={onRouteCalculated}
            onLongRoute={onLongRoute}
          />
        )}
      </div>
    </div>
  );
}

export default Section1;
