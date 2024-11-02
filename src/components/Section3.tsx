interface Section1Props {
  onClearCanvas: () => void; // Prop para limpiar el canvas
}

function Section3({ onClearCanvas }: Section1Props) {
  const ClickLimpiar = () => {
    onClearCanvas();
  };

  return (
    <div className="section3">
      <button
        id="btnCrearLimpiar"
        className="btn-accion limpiar"
        onClick={ClickLimpiar}
      >
        Limpiar
      </button>
      <button id="" className="btn-accion guardar">
        Guardar
      </button>
      <button id="" className="btn-accion historial">
        Historial
      </button>
    </div>
  );
}

export default Section3;
