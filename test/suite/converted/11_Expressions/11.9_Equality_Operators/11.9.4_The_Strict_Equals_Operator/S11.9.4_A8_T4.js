// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(x) is different from Type(y), return false
 *
 * @section 11.9.4, 11.9.6
 * @path 11_Expressions/11.9_Equality_Operators/11.9.4_The_Strict_Equals_Operator/S11.9.4_A8_T4.js
 * @description x or y is null or undefined
 */

//CHECK#1
if (undefined === null) {
  $ERROR('#1: undefined !== null');
}

//CHECK#2
if (null === undefined) {
  $ERROR('#2: null !== undefined');
}

//CHECK#3
if (null === 0) {
  $ERROR('#3: null !== 0');
}

//CHECK#4
if (0 === null) {
  $ERROR('#4: 0 !== null');
}

//CHECK#5
if (null === false) {
  $ERROR('#5: null !== false');
}

//CHECK#6
if (false === null) {
  $ERROR('#6: false !== null');
}

//CHECK#7
if (undefined === false) {
  $ERROR('#7: undefined !== false');
}

//CHECK#8
if (false === undefined) {
  $ERROR('#8: false !== undefined');
}

//CHECK#9
if (null === new Object()) {
  $ERROR('#9: null !== new Object()');
}

//CHECK#10
if (new Object() === null) {
  $ERROR('#10: new Object() !== null');
}

//CHECK#11
if (null === "null") {
  $ERROR('#11: null !== "null"');
}

//CHECK#12
if ("null" === null) {
  $ERROR('#12: "null" !== null');
}

//CHECK#13
if (undefined === "undefined") {
  $ERROR('#13: undefined !== "undefined"');
}

//CHECK#14
if ("undefined" === undefined) {
  $ERROR('#14: "undefined" !== undefined');
}
