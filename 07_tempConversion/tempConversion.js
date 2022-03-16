const ftoc = (f) => {
  return Math.round((f - 32) * .5556 * 10)  / 10;
};

const ctof = (c) => {
  return Math.round(((c * 1.8) + 32) * 10) / 10;
};

console.log(ftoc(100))
console.log(ctof(-10))


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


/* const ftoc = function(f) {
  return Math.round((f - 32) * (5/9) * 10) / 10;
 };
 
 const ctof = function(c) {
   return Math.round(((c * 9/5) + 32) * 10) / 10;
 }; */

