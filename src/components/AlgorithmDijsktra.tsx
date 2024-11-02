// AlgorithmDijstra.tsx

type Grafo = Record<string, Record<string, number>>;

interface DijkstraResult {
  distancia: string;
  ruta: string[];
}

// Esta función nos genera un mensaje indicando en que paso del algoritmo nos encontramos.
function log(mensaje: string): void {
  const imprime: boolean = false;

  if (imprime) {
    console.log(mensaje);
  }
}

// Función auxiliar para obtener el nodo con el menor peso que no ha sido procesado
const nodoPesoMenor = (
  pesos: Record<string, string>,
  procesados: string[]
): string | null => {
  return Object.keys(pesos).reduce((menor: string | null, nodo: string) => {
    if (menor === null || pesos[nodo] < pesos[menor]) {
      if (!procesados.includes(nodo)) {
        menor = nodo;
      }
    }
    return menor;
  }, null);
};

// Función principal del algoritmo de Dijkstra
function AlgorithmDijstra(
  grafo: Grafo,
  nodoInicial: string,
  nodoFinal: string
): DijkstraResult {
  // Inicialización de pesos y nodos padre
  let pesos: Record<string, string> = {};
  pesos[nodoFinal] = "Infinity";
  pesos = Object.assign(pesos, grafo[nodoInicial]);

  const nodosPadre: Record<string, string | null> = { [nodoFinal]: null };

  for (const nodoHijo in grafo[nodoInicial]) {
    nodosPadre[nodoHijo] = nodoInicial;
  }

  const procesados: string[] = [];
  let nodo = nodoPesoMenor(pesos, procesados);

  // Algoritmo principal
  while (nodo) {
    const pesoActual = pesos[nodo];
    const nodosHijo = grafo[nodo];

    for (const n in nodosHijo) {
      if (String(n) === String(nodoInicial)) {
        log("¡No podemos regresar al inicio!");
      } else {
        log("Nombre del nodo inicial: " + nodoInicial);
        log(
          "Evaluando el peso hasta el nodo " +
            n +
            " (buscando desde el nodo " +
            nodo +
            ")"
        );
        log("Último peso: " + pesos[n]);

        let nuevoPeso: string = pesoActual + nodosHijo[n];

        log("Nuevo peso: " + nuevoPeso);

        if (!pesos[n] || pesos[n] > nuevoPeso) {
          pesos[n] = nuevoPeso;
          nodosPadre[n] = nodo;

          log("Nodos padre y pesos actualizados.");
        } else {
          log("Ya existe una mejor ruta.");
        }
      }
    }

    procesados.push(nodo);
    nodo = nodoPesoMenor(pesos, procesados);
  }

  // Construcción de la ruta óptima
  const rutaOptima = [nodoFinal];
  let nodoPadre: string | null = nodosPadre[nodoFinal];

  while (nodoPadre) {
    rutaOptima.unshift(nodoPadre);
    nodoPadre = nodosPadre[nodoPadre];
  }

  rutaOptima.reverse();

  return { distancia: pesos[nodoFinal], ruta: rutaOptima };
}

export default AlgorithmDijstra;
