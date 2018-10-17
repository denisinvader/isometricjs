export const normalizedMatrix = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

export function multiplyMatrices (matrixA, matrixB) {
  const matrixC = [];

  const l = matrixA.length;
  const m = matrixA[0].length;
  const n = matrixB.length;

  for (let i = 0; i < l; i++) {
    matrixC.push([]);

    for (let j = 0; j < n; j++) {
      let c = 0;

      for (let r = 0; r < m; r++) {
        c += matrixA[i][r] * matrixB[r][j];
      }

      matrixC[i].push(c);
    }
  }

  return matrixC;
}

export function matrixToString (matrix) {
  return [
    matrix[0][0],
    matrix[1][0],
    matrix[0][1],
    matrix[1][1],
    matrix[0][2],
    matrix[1][2],
  ].join(', ');
}
