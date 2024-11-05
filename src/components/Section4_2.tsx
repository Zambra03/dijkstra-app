interface Section4_2Props {
  result: { weight: number; path: string };
  result1: { weight: number; path: string };
}

function Section4_2({ result, result1 }: Section4_2Props) {
  const eficiencia = (1 - result.weight / result1.weight) * 100;

  return (
    <div className="section4_2">
      <p className="titulo2">Eficiencia %</p>
      <p>
        %E: (1 -
        <span className="fraction">
          <span className="numerator">(peso ruta optima)</span>
          <span className="denominator">(peso ruta larga)</span>
        </span>
        ) * 100 = eficiencia%
      </p>
      <p>
        %E: (1 -
        <span className="fraction">
          <span className="numerator">{result.weight}</span>
          <span className="denominator">{result1.weight}</span>
        </span>
        ) * 100 = {eficiencia.toFixed(2)}%
      </p>
    </div>
  );
}

export default Section4_2;
