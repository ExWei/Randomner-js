Randomner
=========
Randomner is an library for Node.JS which provide powerful function for using random values.
## Installation
You can install Randomner-Js with the npm:
```bash
npm install randomner
```

## Functions
### randInt(min, max)
Generates random integer between min and max

__Arguments__

* min - An minimal value of result.
* max - An maximum value of result.

__Example__

```js
// Generates random integer between 5 and 10
var randomner = require('randomner');
var randomInteger = randomner.randInt(5, 10);
```
### randFloat(min, max)
Generates random float between min and max

__Arguments__

* min - An minimal value of result.
* max - An maximum value of result.

__Example__

```js
// Generates random float between 2.10 and 3.14
var randomner = require('randomner');
var randomInteger = randomner.randInt(2.10, 3.14);
```
### randString(min, max)
Generates random string with length between min and max

__Arguments__

* min - An minimal length of result string.
* max - An maximum length of result string.

__Example__

```js
// Generates random string with length between 10 and 42
var randomner = require('randomner');
var randomInteger = randomner.randString(10, 42);
```
### randHexColor()
Generates random HEX-code of color

__Example__

```js
// Generates random HEX-code of color
var randomner = require('randomner');
var randomInteger = randomner.randHexColor();
```
### randRgbColor()
Generates random json of rgb-color

__Example__

```js
// Generates random json of rgb-color
var randomner = require('randomner');
var randomInteger = randomner.randRgbColor();
```