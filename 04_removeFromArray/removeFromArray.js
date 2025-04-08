const removeFromArray = function(myArr, ...para) {
    if (para.length === 0) {
        return myArr
    } else {
        return myArr.filter(item => !para.includes(item));
    }
}

// Do not edit below this line
module.exports = removeFromArray;
