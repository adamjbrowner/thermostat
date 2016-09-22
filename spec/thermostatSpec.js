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

  it("can't be raises above maximum temperature", function() {
    thermostat.increaseTemperature(5);
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(25);
  });

  it("Is on power save mode by default", function () {
    expect(thermostat.powerSave).toEqual(true)
  });

  it('Has a reset button which resets temp tp 20', function() {
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20);
  });

  it('Should colour green if temp is below 18', function() {
    thermostat.decreaseTemperature(3)
    expect(thermostat.colour).toEqual("Green");
  })

  it('Should colour yellow by default', function() {
    expect(thermostat.colour).toEqual("Yellow");
  });

  it('Should colour red if temperature is about 25', function() {
    thermostat.increaseTemperature(26);
    expect(thermostat.colour).toEqual("Red");
  })
});
