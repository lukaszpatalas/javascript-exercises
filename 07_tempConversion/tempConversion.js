const ftoc = function (fahTemp) {
  let celsiusTemp = ((fahTemp - 32) * (5 / 9));
  celsiusTemp % 1 === 0 ? celsiusTemp = celsiusTemp : celsiusTemp.toFixed(1);
  return celsiusTemp;
};

const ctof = function (celTemp) {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
