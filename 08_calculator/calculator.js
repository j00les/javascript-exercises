const add = (addA, addB ) => 	addA + addB;


const subtract = (subtractA, subtractB) => subtractA - subtractB;

const sum = (array) =>  array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

const multiply = (array) => array.reduce((previousValue, currentValue) => previousValue * currentValue)


const power = (a, b) => Math.pow(a, b)


const factorial = (n) => {
  if (n === 0) return 1;
  let num = 1;
  for (let i = n; i > 0; i--) {
    num *= i
  }
  return num;
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
