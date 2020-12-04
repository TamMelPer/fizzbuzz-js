'use strict';
// Defines that JavaScript code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport',function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off', function() {
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

});
