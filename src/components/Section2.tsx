import CanvasComponent from "./CanvasComponent";
import React from "react";

interface Section2Props {
  canvasRef: React.RefObject<HTMLCanvasElement>; // Prop para la referencia del canvas
}

function Section2({ canvasRef }: Section2Props) {
  return (
    <div className="section2">
      <CanvasComponent canvasRef={canvasRef} />
    </div>
  );
}

export default Section2;
