const repeatString = function(word, reps) {
    let repeat = "";
    for (let i = 0; i < reps; i++) {
        repeat += word;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
