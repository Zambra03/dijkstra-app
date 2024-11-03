import Section4_1 from "./Section4_1";
import Section4_2 from "./Section4_2";

interface Section4Props {
  result: { weight: number; path: string }; // Nueva prop para recibir el resultado
}

function Section4({ result }: Section4Props) {
  return (
    <div className="section4">
      <Section4_1 result={result ?? { weight: 0, path: "N/A" }} />
      <Section4_2 />
    </div>
  );
}

export default Section4;
