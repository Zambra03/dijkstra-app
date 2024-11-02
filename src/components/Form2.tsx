import React, { useState, useRef, useEffect } from "react";

interface Form2Props {
  coordenadas: Record<string, [number, number]>;
  aristas: [string, string][];
  setAristas: React.Dispatch<React.SetStateAction<[string, string][]>>;
  grafo: Record<string, Record<string, number>>;
  setGrafo: React.Dispatch<
    React.SetStateAction<Record<string, Record<string, number>>>
  >;
  onCreateEdge: (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    peso: number
  ) => void; //
}

function Form2({
  coordenadas,
  aristas,
  setAristas,
  setGrafo,
  onCreateEdge,
}: Form2Props) {
  const inputRef = useRef<HTMLInputElement | null>(null); // Referencia para el input X

  const [initialP, setinitialP] = useState<string>("");
  const [finalP, setfinalP] = useState<string>("");

  // Efecto para enfocar el campo de entrada X cuando el componente se monta
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      initialP !== "" &&
      finalP !== "" &&
      initialP !== null &&
      finalP !== null
    ) {
      if (initialP !== finalP) {
        console.log("Entre al primer if del fomr2");
        const [x1, y1] = coordenadas[initialP];
        const [x2, y2] = coordenadas[finalP];
        const peso = Math.round(
          Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        );

        if (aristas.length > 0) {
          let existe = false;
          let queExiste = `Ya existe un camino desde el punto ${initialP} hasta el punto ${finalP}.`;

          for (let i: number = 0; i < aristas.length; i++) {
            if (
              (aristas[i][0] === initialP && aristas[i][1] === finalP) ||
              (aristas[i][0] === finalP && aristas[i][1] === initialP)
            ) {
              existe = true;
              i = aristas.length;
            }
          }

          if (!existe) {
            setGrafo((prevGrafo) => ({
              ...prevGrafo,
              [initialP]: { ...prevGrafo[initialP], [finalP]: peso },
              [finalP]: { ...prevGrafo[finalP], [initialP]: peso },
            }));

            setAristas((prevAristas) => [
              ...prevAristas,
              [initialP, finalP],
              [finalP, initialP],
            ]);
            console.log("Antes de oncreateedge");
            onCreateEdge(x1, y1, x2, y2, peso);
            console.log("Despues de oncreateedge");
            // Espacio para borrar la data en los input y select
            setinitialP(""); // Restablecer el select inicial del punto
            setfinalP(""); // Restablecer el select final del punto
          } else {
            alert(queExiste);
          }
        } else {
          setGrafo((prevGrafo) => ({
            ...prevGrafo,
            [initialP]: { ...prevGrafo[initialP], [finalP]: peso },
            [finalP]: { ...prevGrafo[finalP], [initialP]: peso },
          }));

          setAristas((prevAristas) => [
            ...prevAristas,
            [initialP, finalP],
            [finalP, initialP],
          ]);
          console.log("Antes de oncreateedge");
          onCreateEdge(x1, y1, x2, y2, peso);
          console.log("Despues de oncreateedge");
          // Espacio para borrar la data en los input y select
          setinitialP(""); // Restablecer el select inicial del punto
          setfinalP(""); // Restablecer el select final del punto
        }
      } else {
        alert(
          `No se puede conectar ${initialP} con ${finalP}, ya que son los mismos puntos. El sistema no lo acepta.`
        );
      }
    } else {
      alert("Por favor introduce los datos.");
    }
  };

  return (
    <form action="#" className="formCaminos form" onSubmit={handleClick}>
      <label htmlFor="initialP" className="labelPuntoInicial">
        Punto inicial
      </label>
      <div className="divPuntoInicial">
        <select
          id="initialP"
          value={initialP}
          onChange={(e) => setinitialP(e.target.value)}
        >
          <option value="">Seleccione un punto</option>
          {Object.keys(coordenadas).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>

      <label htmlFor="finalP">Punto final</label>
      <div className="divPuntoFinal">
        <select
          id="finalP"
          value={finalP}
          onChange={(e) => setfinalP(e.target.value)}
        >
          <option value="">Seleccione un punto</option>
          {Object.keys(coordenadas).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>

      <div className="btnCrearCamino">
        <input
          type="submit"
          id="btnCrearE"
          value="Crear camino"
          className="btn"
        ></input>
      </div>
    </form>
  );
}

export default Form2;
