const removeFromArray = function() {
  const myArguments = Array.from(arguments);
  const myArray = myArguments.shift(); //first array
  const removableItems = [...myArguments] //rest of arguments
  const result = myArray.filter((x) => {
    if (removableItems.indexOf(x) < 0) { // si la var x no tiene un index en la lista de removibles, devuelvalo
      return x;
    } 
  })
 
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
