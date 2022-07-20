const ftoc = function (fahTemp) {
  let celsiusTemp = ((fahTemp - 32) * (5 / 9));
  if (celsiusTemp % 1 != 0) {
    celsiusTemp = parseFloat(celsiusTemp.toFixed(1));
  }
  return celsiusTemp;
};

const ctof = function (celTemp) {
  let fahrenheitTemp = (celTemp * (9 / 5)) + 32;
  if (fahrenheitTemp % 1 != 0) {
    fahrenheitTemp = parseFloat(fahrenheitTemp.toFixed(1));
  }
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
