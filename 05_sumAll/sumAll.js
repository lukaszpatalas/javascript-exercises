const sumAll = function (start, end) {
    if (start < 0 || end < 0) return "ERROR";
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }
    const difference = end - start;
    let result = 0;
    for (let a = 0; a <= difference; a++) {
        result += start + a;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
