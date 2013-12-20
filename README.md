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
### randTld()
// Generates random Top-level domain zone

__Example__

```js
// Generates random Top-level domain zone
var randomner = require('randomner');
var randomInteger = randomner.randTld();
```
### randDomain({min, max})
Generates random Top-level domain

__Arguments__

* min - An minimal length name of domain.
* max - An maximum length name of domain.

__Example__

```js
// Generates random Top-level domain
var randomner = require('randomner');
var randomInteger = randomner.randDomain({min: 5, max: 14});
```
### randEmail({min, max})
Generates random email

__Arguments__

* min - An minimal length name of user and domain.
* max - An maximum length name of user and domain.

__Example__

```js
// Generates random email
var randomner = require('randomner');
var randomInteger = randomner.randEmail({min: 5, max: 14});
```
### randIpv4Ip()
Generates random IPv4 address

__Example__

```js
// Generates random IPv4 address
var randomner = require('randomner');
var randomInteger = randomner.randIpv4Ip();
```
### randTimeAmPm()
Return pm or am

__Example__

```js
// Return pm or am
var randomner = require('randomner');
var randomInteger = randomner.randTimeAmPm();
```
### randMonth()
Generates random month

__Example__

```js
// Generates random month
var randomner = require('randomner');
var randomInteger = randomner.randMonth();
```
### randTimeStamp()
Generates random timestamp

__Example__

```js
// Generates random timestamp
var randomner = require('randomner');
var randomInteger = randomner.randTimeStamp();
```
### randDateTime()
Generates JavaScript object Date with random DateTime

__Example__

```js
// Generates JavaScript object Date with random DateTime
var randomner = require('randomner');
var randomInteger = randomner.randDateTime();
```

### randCoordinates()
Generates random coordinates

__Example__

```js
// Generates random coordinates
var randomner = require('randomner');
var randomInteger = randomner.randCoordinates();
```
### randCountry()
Generates random country

__Example__

```js
// Generates random country
var randomner = require('randomner');
var randomInteger = randomner.randCountry();
```