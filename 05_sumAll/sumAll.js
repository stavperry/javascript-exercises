const sumAll = function(num1, num2) {
    if ((Number.isInteger(num1) && Number.isInteger(num2)) && ((num1 >= 0) && (num2 >= 0))) {
            if (num2 > num1) {
            sum = 0;
            for (let i = num1; i <= num2; i++) {
                sum = sum + i
            }
            return sum
        } else if (num1 > num2) {
            sum = 0;
            for (let i = num2; i<=num1; i++) {
                sum = sum + i
            } return sum
        } else {
            return num1 + num2;
        }
    } else {
        return "ERROR";
    }

}




    
//     if (num1.isInteger() === false || num2.isInteger() === false) {
//         return "ERROR";
//     }
//     if (num1 < 0 || num2 < 0) {
//         return "ERROR";
//     }
//     allTogether = 0;
//     if (num1 < num2) {
//         for (let i = 0; i < num2; i++) {
//             allTogether = num1 + i;
//         }
//         return allTogether
//     } else {
//         for (let i = 0; i < num1; i++) {
//             allTogether = num2 + i
//         }
//     }
// };

// Do not edit below this line
module.exports = sumAll;
