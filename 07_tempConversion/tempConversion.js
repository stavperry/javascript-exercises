const convertToCelsius = function(degree) {
  let newDeg = ((degree - 32) * (5/9)).toFixed(1);
  newDeg = parseFloat(newDeg);
  if (newDeg !== Math.floor(newDeg)) {
    return newDeg;
  } else {
    return Math.floor(newDeg);
  }
};

const convertToFahrenheit = function(degree) {
  let newDeg = ((degree * (9/5)) + 32);
  if (newDeg !== Math.floor(newDeg)) {
    return parseFloat(newDeg.toFixed(1));
  } else {
    return Math.floor(newDeg);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
