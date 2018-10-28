import { multiplyMatrices } from './matrix.js';
import { degToRad } from './utils.js';

const { cos, sin } = Math;

const isometricAngleX = Math.asin(Math.tan(degToRad(30)));
const isometricAngleY = degToRad(45);
const isometricTopAngleX = degToRad(45);

export const rotateX = a => ([
  [1, 0, 0],
  [0, cos(a), sin(a)],
  [0, -sin(a), cos(a)],
]);

export const rotateY = a => ([
  [cos(a), 0, -sin(a)],
  [0, 1, 0],
  [sin(a), 0, cos(a)],
]);

export const rotateZ = a => ([
  [cos(a), -sin(a), 0],
  [sin(a), cos(a), 0],
  [0, 0, 1],
]);

export const translateX = dx => ([
  [1, 0, dx],
  [0, 1, 0],
  [0, 0, 0]
]);

export const translateY = dy => ([
  [1, 0, 0],
  [0, 1, dy],
  [0, 0, 0]
]);

export const translate = (dx, dy) => ([
  [1, 0, dx],
  [0, 1, dy],
  [0, 0, 0]
]);

export const isometricLeft = multiplyMatrices(
  rotateX(isometricAngleX),
  rotateY(isometricAngleY)
);
export const isometricRight = multiplyMatrices(
  rotateX(isometricAngleX),
  rotateY(-isometricAngleY)
);

