const sumAll = function (start, end) {
    if ((start >= 0 && end >= 0) &&
    (typeof start === "number" && typeof end === "number")
    ) {
        let difference = end - start;
        let result = 0;
        if (difference > 0) {
            for (let a = 0; a <= difference; a++) {
                result += start + a;
            }
        } else if (difference === 0) {
            result = start;
        } else {
            for (let a = 0; a >= difference; a--) {
                result += start + a;
            }
        }
        return result;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
