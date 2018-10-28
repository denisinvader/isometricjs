const MATRIX_SIZE = 3;

export const normalizedMatrix = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

export function multiplyMatrices (matrixA, matrixB) {
  const matrixC = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 0; i < MATRIX_SIZE; i++) {
    for (let j = 0; j < MATRIX_SIZE; j++) {
      for (let k = 0; k < MATRIX_SIZE; k++) {
        matrixC[i][j] += matrixA[i][k] * matrixB[k][j];
      }
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
