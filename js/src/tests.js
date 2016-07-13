"use strict";

var test = require('tape');
var getRandomAttack = require('./getRandomAttack');
var robotModels = require('./robotModels');

for (let robot in robotModels) {
  let currentRobot = new robotModels[robot]();
  test('Robots', function(t) {
    t.equal(typeof currentRobot.model, "string", `${currentRobot.model} should be a string`);
    t.equal(typeof currentRobot.maxHealth, "number", `currentRobot.maxHealth should be a number`);
    t.equal(typeof currentRobot.minHealth, "number", `currentRobot.minHealth should be a number`);
    t.equal(typeof currentRobot.maxAttack, "number", `currentRobot.maxAttack should be a number`);
    t.equal(typeof currentRobot.minAttack, "number", `currentRobot.minAttack should be a number`);
    t.end();
  });
}

// t.equal(actual, expected, msg)
