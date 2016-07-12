"use strict";

// Gets a range and returns a randomAttack
function getRandomAttack(attackMax, attackMin) {
  let randomAttack = Math.floor(Math.random() * (attackMax - attackMin + 1)) + attackMin;
  return randomAttack;
}

module.exports = getRandomAttack;
