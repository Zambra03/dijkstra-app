type Grafo = Record<string, Record<string, number>>;

interface RutaLargaResult {
  distancia: number;
  ruta: string[];
}

// Función para encontrar la ruta más larga desde un nodo inicial hasta un nodo final
function LongRoute(
  grafo: Grafo,
  nodoInicial: string,
  nodoFinal: string
): RutaLargaResult {
  let distanciaMaxima = -Infinity;
  let rutaLarga: string[] = [];

  function dfs(
    nodo: string,
    rutaActual: string[],
    distanciaActual: number
  ): void {
    // Si llegamos al nodo final, evaluamos si es la ruta más larga
    if (nodo === nodoFinal) {
      if (distanciaActual > distanciaMaxima) {
        distanciaMaxima = distanciaActual;
        rutaLarga = [...rutaActual];
      }
      return;
    }

    // Recorremos los nodos adyacentes
    for (const vecino in grafo[nodo]) {
      if (!rutaActual.includes(vecino)) {
        // Evitamos ciclos
        dfs(
          vecino,
          [...rutaActual, vecino],
          distanciaActual + grafo[nodo][vecino]
        );
      }
    }
  }

  // Iniciar DFS desde el nodo inicial
  dfs(nodoInicial, [nodoInicial], 0);

  return {
    distancia: distanciaMaxima,
    ruta: rutaLarga,
  };
}

export default LongRoute;
