import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

function Section1() {
  // Estado para controlar la visibilidad del formulario
  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);

  // Función para mostrar el formulario al hacer clic en "Punto"
  const ClickPunto = () => {
    setTimeout(() => {
      setShowForm(true);
    }, 300); // Retraso de 300 ms
    setShowForm1(false);
    setShowForm2(false);
  };

  const ClickCamino = () => {
    setShowForm(false);
    setTimeout(() => {
      setShowForm1(true);
    }, 300); // Retraso de 300 ms
    setShowForm2(false);
  };

  const ClickRuta = () => {
    setShowForm(false);
    setShowForm1(false);
    setTimeout(() => {
      setShowForm2(true);
    }, 300); // Retraso de 300 ms
  };

  return (
    <div className="section1">
      <p className="titulo">¿Qué quieres crear?</p>
      <button id="btnCrearPunto" className="btn-opcion" onClick={ClickPunto}>
        Punto
      </button>
      <button id="btnCrearCamino" className="btn-opcion" onClick={ClickCamino}>
        Camino
      </button>
      <button id="btnCrearRuta" className="btn-opcion" onClick={ClickRuta}>
        Ruta
      </button>
      <div className={`form-container ${showForm ? "slide-down" : ""}`}>
        {showForm && <Form1 />}
      </div>
      <div className={`form-container1 ${showForm1 ? "slide-down1" : ""}`}>
        {showForm1 && <Form2 />}
      </div>
      <div className={`form-container1 ${showForm2 ? "slide-down1" : ""}`}>
        {showForm2 && <Form3 />}
      </div>
    </div>
  );
}

export default Section1;
