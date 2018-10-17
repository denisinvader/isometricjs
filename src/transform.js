import { normalizedMatrix, multiplyMatrices, matrixToString } from './matrix.js';

export default function (_) {
  var matrix = _ || normalizedMatrix;

  function transform () {
    return matrix.slice();
  }

  transform.add = _ => (matrix = multiplyMatrices(matrix, _), transform);

  transform.toString = () => matrixToString(matrix);

  return transform;
};
