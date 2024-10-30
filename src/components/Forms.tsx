function Form() {
  return (
    <form action="#" className="formPuntos form">
      <label htmlFor="posicionPunto">
        Posición del punto en coordenadas (x,y){" "}
      </label>
      <div className="formRow">
        <input type="number" id="positionX" min={0} max={100} placeholder="X" />
        <input type="number" id="positionY" min={0} max={100} placeholder="Y" />
      </div>
      <label htmlFor="namePunto">Nombre del punto</label>
      <div className="formRow">
        <input type="text" id="namePunto" placeholder="Nombre del punto" />
        <input
          type="submit"
          id="btnCrearV"
          className="btn"
          value="Crear punto"
        />
      </div>
    </form>
  );
}

export default Form;
