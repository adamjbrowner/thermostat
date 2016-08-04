'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('Can be increased with up button', function() {
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(21);
  });

  it('Can be decreased with down button', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.temperature).toEqual(19);
  });

  it("Has a minumum temperature of 10 degress", function() {
    expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
  });

  it("Can't be reduced below minimum temperature", function() {
    thermostat.decreaseTemperature(10)
    thermostat.decreaseTemperature()
    expect(thermostat.temperature).toEqual(10)
  });

  it("Has a maximum temperature of 25 degrees if power save mode is on", function() {
    thermostat.powerSaveOn()
    expect(thermostat.MAXIMUM_TEMPERATURE).toEqual(25);
  });

  it('Has a maximum temperature of 32 degrees by power save mode is off', function() {
    thermostat.powerSaveOff()
    expect(thermostat.MAXIMUM_TEMPERATURE).toEqual(32);
  });

  it("Is on power save mode by default", function () {
    expect(thermostat.powerSave).toEqual(true)
  });

  it ('Has a reset button which resets temp tp 20', function() {
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20);
  });
});
