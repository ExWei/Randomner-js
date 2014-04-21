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
var randomFloat = randomner.randInt(2.10, 3.14);
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
var randomString = randomner.randString(10, 42);
```
### randHexColor()
Generates random HEX-code of color

__Example__

```js
// Generates random HEX-code of color
var randomner = require('randomner');
var randomHEXColor = randomner.randHexColor();
```
### randRgbColor()
Generates random json of rgb-color

__Example__

```js
// Generates random json of rgb-color
var randomner = require('randomner');
var randomRgbColor = randomner.randRgbColor();
```
### randTld()
// Generates random Top-level domain zone

__Example__

```js
// Generates random Top-level domain zone
var randomner = require('randomner');
var randomZone = randomner.randTld();
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
var randomDomain = randomner.randDomain({min: 5, max: 14});
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
var randomEmail = randomner.randEmail({min: 5, max: 14});
```
### randIpv4Ip()
Generates random IPv4 address

__Example__

```js
// Generates random IPv4 address
var randomner = require('randomner');
var randomIPv4 = randomner.randIpv4Ip();
```
### randTimeAmPm()
Return pm or am

__Example__

```js
// Return pm or am
var randomner = require('randomner');
var randomTime = randomner.randTimeAmPm();
```
### randMonth()
Generates random month

__Example__

```js
// Generates random month
var randomner = require('randomner');
var randomMonth = randomner.randMonth();
```
### randTimeStamp()
Generates random timestamp

__Example__

```js
// Generates random timestamp
var randomner = require('randomner');
var randomTimestamp = randomner.randTimeStamp();
```
### randDateTime()
Generates JavaScript object Date with random DateTime

__Example__

```js
// Generates JavaScript object Date with random DateTime
var randomner = require('randomner');
var randomDatetime = randomner.randDateTime();
```

### randCoordinates()
Generates random coordinates

__Example__

```js
// Generates random coordinates
var randomner = require('randomner');
var randomCoordinates = randomner.randCoordinates();
```
### randCountry()
Generates random country

__Example__

```js
// Generates random country
var randomner = require('randomner');
var randomCountry = randomner.randCountry();
```
### randName(gender)
Generates random name
If gender not presented - it will be selected randomly.

__Example__

```js
// Generates random name
var randomner = require('randomner');
var randomName = randomner.randName();
```
### randElement(array)
Returns random element from array

__Example__

```js
// Returns random element from array
var randomner = require('randomner');
var array = ["a", "b", "c"];
var randomElement = randomner.randElement(array);
```
### randBool()
Returns true or false

__Example__

```js
// Returns true or false
var randomner = require('randomner');
var randomBool = randomner.randBool();
```