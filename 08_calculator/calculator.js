const add = function(...x) {
  if (x.length === 1) {
    return x[0] + x[0];
  } else {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += x[i];
    }
    return sum;
  }
};

const subtract = function(...x) {
  if (x.length === 1) {
    return 0;
  } else {
    let result = x[0];
    for (let i = 1; i < x.length; i++) {
      result -= x[i];
    }
    return result;
  }
};

const sum = function(...x) {
  if (x.length === 1 && Array.isArray(x[0])) {
    x = x[0];
  }
  if (x.length === 0) {
    return 0;
  } else {  
    let total = 0;
    for (let i = 0; i < x.length; i++) {
      total += Number(x[i]);
    }
    return total;
  }
};


const multiply = function(...x) {
  if (x.length === 1 && Array.isArray(x[0])) {
    x = x[0];
  }
  if (x.length === 0) {
    return 0;
  } else if (x.length === 1) {
    return Number(x[0]) * Number(x[0]);
  } else {  
    let result = 1;
    for (let i = 0; i < x.length; i++) {
      result *= Number(x[i]);
    }
    return result;
  }
};

const power = function(...x) {
  if (x.length === 1) {
    return x[0] ** x[0];
  } else {
    return x[0] ** x[1];
  }
	
};

const factorial = function(x) {
  if (x === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <=x; i++) {
      result *= i;
    }
    return result
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
