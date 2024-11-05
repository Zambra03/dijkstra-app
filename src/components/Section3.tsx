interface Section1Props {
  onClearCanvas: () => void; // Prop para limpiar el canvas
  handleClear: () => void;
  onClearRoute: () => void;
  onClearLargeRoute: () => void;
}

function Section3({
  onClearCanvas,
  handleClear,
  onClearRoute,
  onClearLargeRoute,
}: Section1Props) {
  const ClickLimpiar = () => {
    onClearCanvas();
    handleClear();
    onClearRoute();
    onClearLargeRoute();
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
