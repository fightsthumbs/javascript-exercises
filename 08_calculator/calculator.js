const add = function() {
  const arrayNumbers = [...arguments];

    let sum = 0;

    for (let i of arrayNumbers) {

      sum += i;
    }

   
    return parseInt(sum);
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(array) {
  let sum = 0;
  for (let i of array) {
    sum+=i;
  }
  return sum;

	
};

const multiply = function(array) {
  let mult = 1;
  for (let i of array) {
    mult *= i;
  }
  return mult;
};

const power = function(num1,num2) {
  return Math.pow(num1,num2)
	
};

const factorial = function(number) {
  let fact = 1
  if (number > 0) {
    for (let i = 1; i <= number; i++) {
      fact*=i;
  
    } 
  }
  return fact;
	
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
