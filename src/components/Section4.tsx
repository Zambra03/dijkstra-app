import Section4_1 from "./Section4_1";
import Section4_2 from "./Section4_2";

interface Section4Props {
  result: { weight: number; path: string }; // Nueva prop para recibir el resultado
  result1: { weight: number; path: string }; // Nueva prop para recibir el resultado
}

function Section4({ result, result1 }: Section4Props) {
  return (
    <div className="section4">
      <Section4_1 result={result ?? { weight: 0, path: "N/A" }} />
      <Section4_2
        result={result ?? { weight: 0, path: "N/A" }}
        result1={result1 ?? { weight: 0, path: "N/A" }}
      />
    </div>
  );
}

export default Section4;
