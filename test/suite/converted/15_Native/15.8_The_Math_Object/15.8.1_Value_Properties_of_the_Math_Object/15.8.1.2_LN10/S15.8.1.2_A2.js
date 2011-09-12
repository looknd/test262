// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property LN10 of the Math Object has the attribute DontEnum
 *
 * @section 15.8.1.2
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.2_LN10/S15.8.1.2_A2.js
 * @description Checking if Math.LN10 property has the attribute DontEnum
 */

// CHECK#1
for(x in Math) {
  if(x === "LN10") {
    $ERROR('#1: Value Property LN10 of the Math Object hasn\'t attribute DontEnum: \'for(x in Math) {x==="LN10"}\'');
  }
}

