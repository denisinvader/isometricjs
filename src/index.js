import transform from './transform.js';
import {
  rotateX,
  rotateY,
  rotateZ,

  translateX,
  translateY,
  translate,

  isometricLeft,
  isometricRight,
} from './transforms.js';
import {
  degToRad,
  radToDeg,
} from './utils.js';

transform.rotateX = rotateX;
transform.rotateY = rotateY;
transform.rotateZ = rotateZ;

transform.translateX = translateX;
transform.translateY = translateY;
transform.translate = translate;

transform.isometricLeft = isometricLeft;
transform.isometricRight = isometricRight;

transform.degToRad = degToRad;
transform.radToDeg = radToDeg;

export default transform;
