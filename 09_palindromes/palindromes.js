const palindromes = function (string) {
  const stringToList = string.toLowerCase().split("");
  let cleanString = "";
  const sc = [","," ",".","!"]
  for (let i of stringToList) {
    if (sc.indexOf(i) < 0) {
      cleanString += i;
    }
  }

  let arrayToCompare = cleanString.split("");
  let reverseArray = [...arrayToCompare];
  reverseArray.reverse();
  for (let i=0; i < arrayToCompare.length; i++) {
    if (arrayToCompare[i] !== reverseArray[i]) {
      return false;
    }    
  }
  return true

};

// Do not edit below this line
module.exports = palindromes;
