// leapYears takes parameter leapYear
// condition to check - leapYear divisible by 4 and both 100 and 400
// if true - returns true, else false

const leapYears = function (leapYear) {

    if (leapYear % 4 === 0) {
        if (leapYear % 100 === 0) {
            if (leapYear % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
