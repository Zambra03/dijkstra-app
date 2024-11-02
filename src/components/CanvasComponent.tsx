import React, { useEffect } from "react";

// Función para limpiar el canvas y ajustar el tamaño
function emptyCanvas(canvas: HTMLCanvasElement | null, size: number = 600) {
  if (canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      canvas.width = size;
      canvas.height = size;
      drawGrid(ctx, size); // Llama a drawGrid para dibujar la cuadrícula después de ajustar el tamaño
    }
  }
}

// Función para dibujar una cuadrícula en el canvas
function drawGrid(ctx: CanvasRenderingContext2D, size: number = 600) {
  ctx.strokeStyle = "#F5F5F5";

  // Dibuja las líneas verticales
  for (let x = 0; x <= size; x += 6) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, size);
  }

  // Dibuja las líneas horizontales
  for (let y = 0; y <= size; y += 6) {
    ctx.moveTo(0, y);
    ctx.lineTo(size, y);
  }

  ctx.stroke(); // Dibuja todas las líneas en el contexto
}

// Nueva función para dibujar un vértice
export function drawVertex(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number = 7,
  nameOfVertex: string,
  size: number = 600
) {
  let escala = Math.round(size / 100);
  let xPixel = x * escala;
  let yPixel = y * escala;

  if (ctx) {
    ctx.textAlign = "center";
    ctx.font = "10pt Verdana";
    ctx.fillStyle = "#000000";
    ctx.fillText(nameOfVertex, xPixel, size - yPixel + 23);

    ctx.fillStyle = "#7030A0"; // Color del vértice
    ctx.beginPath();
    ctx.arc(xPixel, size - yPixel, r, 0, 2 * Math.PI);
    ctx.fill();
  }

  console.log("Punto Creado");
}

// Nueva función para dibujar una arista
export function drawEdge(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  weight: number | null = null,
  size: number = 600,
  optimalRoute: boolean = false
) {
  let escala = Math.round(size / 100);
  let x1Pixel = x1 * escala;
  let y1Pixel = y1 * escala;
  let x2Pixel = x2 * escala;
  let y2Pixel = y2 * escala;
  let xMedioPixel = Math.round(((x1 + x2) / 2) * escala);
  let yMedioPixel = Math.round(((y1 + y2) / 2) * escala);

  if (ctx) {
    if (optimalRoute) {
      ctx.beginPath();
      ctx.strokeStyle = "#C00303"; // Color para la ruta óptima
    } else {
      ctx.textAlign = "center";
      ctx.font = "10pt Verdana";
      ctx.fillStyle = "#000000";
      if (weight !== null) {
        ctx.fillText(weight.toString(), xMedioPixel + 15, size - yMedioPixel);
      }
      ctx.strokeStyle = "#7030A0"; // Color para la arista normal
    }

    ctx.lineWidth = 3;
    ctx.moveTo(x1Pixel, size - y1Pixel);
    ctx.lineTo(x2Pixel, size - y2Pixel);
    ctx.stroke();
  }
}

// Función para limpiar información en el formulario
export function clearInformation(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  size: number = 600
) {
  emptyCanvas(canvasRef.current, size); // Limpia el canvas y ajusta el tamaño

  // Otras acciones que desees realizar
  console.log("Información limpiada");
}

export function clearFormData() {
  // Limpiar todos los inputs
  const formInputs = document.querySelectorAll(
    ".form input:not(input[type='submit'])"
  );
  formInputs.forEach((input) => {
    const inputElement = input as HTMLInputElement; // Aserción de tipo
    inputElement.value = ""; // Restablecer el valor de cada input
  });

  // Limpiar todos los selects
  const formSelects = document.querySelectorAll(".form select");
  formSelects.forEach((select) => {
    const selectElement = select as HTMLSelectElement; // Aserción de tipo
    selectElement.selectedIndex = 0; // Restablecer la selección a la opción por defecto
  });
}

// Función para ajustar el tamaño del canvas
// function sizeCanvas(canvas: HTMLCanvasElement | null, size: number = 600) {
//   if (canvas) {
//     canvas.width = size;
//     canvas.height = size;
//     console.log(`Tamaño del canvas ajustado a ${size}x${size}`);
//   }
// }

export function fillSelects(grafo: Record<string, any>): void {
  const initialP = document.getElementById("initialP") as HTMLSelectElement;
  const finalP = document.getElementById("finalP") as HTMLSelectElement;
  const initialPC = document.getElementById("initialPC") as HTMLSelectElement;
  const finalPC = document.getElementById("finalPC") as HTMLSelectElement;

  // Verificar que los elementos existen
  if (!initialP || !finalP || !initialPC || !finalPC) {
    console.error("Uno o más selects no se encontraron en el DOM.");
    return; // Salir si algún select no existe
  }

  // Limpiar opciones existentes
  initialP.innerHTML = "";
  finalP.innerHTML = "";
  initialPC.innerHTML = "";
  finalPC.innerHTML = "";

  const optionDefault1 = document.createElement("option");
  optionDefault1.text = "...";
  optionDefault1.value = "";
  initialP.add(optionDefault1);

  const optionDefault2 = document.createElement("option");
  optionDefault2.text = "...";
  optionDefault2.value = "";
  finalP.add(optionDefault2);

  const optionDefault3 = document.createElement("option");
  optionDefault3.text = "...";
  optionDefault3.value = "";
  initialPC.add(optionDefault3);

  const optionDefault4 = document.createElement("option");
  optionDefault4.text = "...";
  optionDefault4.value = "";
  finalPC.add(optionDefault4);

  const nodos: string[] = Object.keys(grafo);

  for (let i = 0; i < nodos.length; i++) {
    const optionInitial = document.createElement("option");
    optionInitial.text = nodos[i];
    optionInitial.value = nodos[i];
    initialP.add(optionInitial);

    const optionInitialC = document.createElement("option");
    optionInitialC.text = nodos[i];
    optionInitialC.value = nodos[i];
    initialPC.add(optionInitialC);

    const optionFinal = document.createElement("option");
    optionFinal.text = nodos[i];
    optionFinal.value = nodos[i];
    finalP.add(optionFinal);

    const optionFinalC = document.createElement("option");
    optionFinalC.text = nodos[i];
    optionFinalC.value = nodos[i];
    finalPC.add(optionFinalC);
  }
}

// Componente principal de Canvas en React
function CanvasComponent({
  canvasRef,
}: {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}) {
  useEffect(() => {
    const canvas = canvasRef.current;
    emptyCanvas(canvas, 600); // Ajusta el tamaño y dibuja la cuadrícula
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="visualizacion"
      width={600} // Este valor es opcional ya que `sizeCanvas` lo ajusta
      height={600}
    />
  );
}

export default CanvasComponent;
