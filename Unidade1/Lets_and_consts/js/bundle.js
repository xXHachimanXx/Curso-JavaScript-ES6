"use strict";

/**
 * Este código está errado
 */
function teste(x) {
  if (x > 4) {
    //uma Let só pode ser visualizada em seu escopo
    var _y = 2;
  }

  console.log(x, y);
}

teste(10);
