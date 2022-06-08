const reverseString = function(string) {
  const stringList = string.split("");
  const output = []; 
  for (let i of stringList) {
    output.unshift(i);
  }

  return output.join("");

};

// Do not edit below this line
module.exports = reverseString;
