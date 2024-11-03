interface Section4_1Props {
  result: { weight: number; path: string };
}

function Section4_1({ result }: Section4_1Props) {
  return (
    <div className="section4_1">
      <p className="titulo2">Ruta Optima</p>
      <p>Peso total: {result.weight}</p>
      <p>Ruta: {result.path}</p>
    </div>
  );
}

export default Section4_1;
