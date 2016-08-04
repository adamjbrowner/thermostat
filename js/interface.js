$(document).ready(function() {
  var thermostat = new Thermostat
  updateTemperature = function() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.colour);
  }
  updateTemperature();
  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });
  $('#temperature-down').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });
  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });
  $('#powersaving-on').on('click', function() {
    thermostat.powerSaveOn();
    updateTemperature();
  });
  $('#powersaving-off').on('click', function() {
    thermostat.powerSaveOff();
  });
  $('#current-city').change(function()) {
    var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  })
});
