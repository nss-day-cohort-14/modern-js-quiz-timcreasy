"use strict";

let writeToAttackLog = (attackString) => {

  $('#attackLog').prepend(attackString);
}

module.exports = writeToAttackLog;
