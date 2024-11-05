interface Section1Props {
  onClearCanvas: () => void; // Prop para limpiar el canvas
  handleClear: () => void;
  onClearRoute: () => void;
}

function Section3({ onClearCanvas, handleClear, onClearRoute }: Section1Props) {
  const ClickLimpiar = () => {
    onClearCanvas();
    handleClear();
    onClearRoute();
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
