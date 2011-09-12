// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "setUTCSeconds" has { DontEnum } attributes
 *
 * @section 15.9.5.31
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.31_Date.prototype.setUTCSeconds/S15.9.5.31_A1_T1.js
 * @description Checking absence of ReadOnly attribute
 */

x = Date.prototype.setUTCSeconds;
if(x === 1)
  Date.prototype.setUTCSeconds = 2;
else
  Date.prototype.setUTCSeconds = 1;
if (Date.prototype.setUTCSeconds === x) {
  $ERROR('#1: The Date.prototype.setUTCSeconds has not the attribute ReadOnly');
}

