function repeatString(word, number) {
    if (number < 0) {
        return "ERROR";
    } else {
        let result = '';
        for (let i = 0; i < number; i++) {
            result += word;
        }
        return result;
    }
}

// Do not edit below this line
module.exports = repeatString;
