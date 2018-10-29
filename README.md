# IsometricJS
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdenisinvader%2Fisometricjs.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdenisinvader%2Fisometricjs?ref=badge_shield)


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


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdenisinvader%2Fisometricjs.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdenisinvader%2Fisometricjs?ref=badge_large)