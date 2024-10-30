function Form2() {
  return (
    <form action="#" className="formCalculate form">
      <label htmlFor="initialPC" className="labelPuntoInicial">
        Punto inicial{" "}
      </label>
      <div className="divPuntoInicial">
        <select id="initialPC"></select>
      </div>

      <label htmlFor="finalPC">Punto final</label>
      <div className="divPuntoFinal">
        <select id="finalPC"></select>
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

export default Form2;
