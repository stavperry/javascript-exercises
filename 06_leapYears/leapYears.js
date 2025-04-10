const leapYears = function(year) {
    // if divisible by 4 - might be leap year. if not - not a leap year.
    // if it's divisible by 4, it needs to not be divisible by 100. if it is,
    // it needs to be divisible by 400.
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
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
