const reverseString = function(phrase) {
    let phraseArr = [];
    for (letter of phrase) {
        phraseArr.push(letter); 
    } // so now we'll have phraseArr = ['h', 'e', 'l', 'l', 'o']
    let newArr = [];
    for (let i = phraseArr.length - 1; i >= 0 ; i--) {
        newArr.push(phraseArr[i]);
    }
    return newArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
