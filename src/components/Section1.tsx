import Form from "./Forms";

function Section1() {
  return (
    <div className="section1">
      <p className="titulo">¿Qué quieres crear?</p>
      <button id="btnCrearPunto" className="btn-opcion">
        Punto
      </button>
      <button id="btnCrearCamino" className="btn-opcion">
        Camino
      </button>
      <button id="btnCrearRuta" className="btn-opcion">
        Ruta
      </button>
      <Form />
    </div>
  );
}

export default Section1;
