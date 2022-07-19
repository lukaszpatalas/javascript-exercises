// leapYears takes parameter leapYear
// condition to check - leapYear divisible by 4 and both 100 and 400
// if true - returns true, else false

const leapYears = function (leapYear) {
    return (leapYear % 4 === 0 &&  (leapYear % 100 != 0 || leapYear % 400 === 0));
}

// Do not edit below this line
module.exports = leapYears;
