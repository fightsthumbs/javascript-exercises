const sumAll = function(num1, num2) {
  let sum = 0;

if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
  return "ERROR";
} 
  

  for (let i = (num1 < num2 ? num1:num2); i <= (num1<num2 ? num2:num1); i++) {
    sum += i;
  }
  return sum

};

// Do not edit below this line
module.exports = sumAll;
