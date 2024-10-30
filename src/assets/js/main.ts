// index.ts
const canvas = document.getElementById(
  "visualizacion"
) as HTMLCanvasElement | null;

if (canvas && canvas.getContext) {
  const ctx = canvas.getContext("2d");
}
