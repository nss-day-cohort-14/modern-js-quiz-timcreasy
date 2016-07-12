"use strict";

function writeToAttackLog(attackString) {

  $('#attackLog').prepend(attackString);

}

module.exports = writeToAttackLog;
