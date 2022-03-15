const sumAll = (first, last) => {
    if(!Number.isInteger(first) || !Number.isInteger(last)) {
        return "ERR-Motherfucking-OR"
    
      } if (first < 0 || last < 0) {
        return "ERR-Motherfucking-OR"
    
      } if (first > last) {
        
      }

};

// Do not edit below this line
module.exports = sumAll;

/* implement a function that takes 2 integers and returns sum of every number between and including them */

/* const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
      sum += i;
    }
    return sum;
  }; */