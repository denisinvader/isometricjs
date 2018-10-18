# IsometricJS

Library for generating isometric mrojections matrices in web.

## Installation

```sh
yarn add isometricjs
# or
npm install isometricjs
```

## Usage

```js
import transform from 'isometricjs';

const matrixLeft = transform()
  .add(transform.rotateZ(transform.degToRad(180)))
  .add(transform.rotateX(transform.degToRad(-90)))
;

const isometricMatrix = transform(transform.isometricLeft);
```
