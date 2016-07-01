describe("Specification for Robot", function() {

  it("should have a Robot constructor", function() {
    expect(Robot).toBeDefined();
  });

});

describe("Specification for Robot Types", function() {

  it("should have three robot functions", function() {
    expect(Drone).toBeDefined();
    expect(Bipedal).toBeDefined();
    expect(Micron).toBeDefined();
  });

});

describe("Specification for Drone Type", function() {

  it("should have two model functions", function() {
    expect(Drone.prototype.kick).toBeDefined();
    expect(Drone.prototype.punch).toBeDefined();
  });
  
});

describe("Specification for Bipedal Type", function() {

  it("should have two model functions", function() {
    expect(Bipedal.prototype.powerWalk).toBeDefined();
    expect(Bipedal.prototype.powerSkip).toBeDefined();
  });
  
});

describe("Specification for Micron Type", function() {

  it("should have two model functions", function() {
    expect(Micron.prototype.inchAttack).toBeDefined();
    expect(Micron.prototype.bacterialBang).toBeDefined();
  });
  
});

