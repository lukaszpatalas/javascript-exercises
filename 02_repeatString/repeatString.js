const repeatString = function (word, reps) {
    let repeat = "";
    if (reps >= 0) {
        for (let i = 0; i < reps; i++) {
            repeat += word;
        }
    } else {
        repeat += "ERROR";
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
