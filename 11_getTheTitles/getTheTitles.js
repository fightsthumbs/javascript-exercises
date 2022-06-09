const getTheTitles = function(array) {
  const booksArray = [];
  for (let i of array) {
    booksArray.push(i["title"]);
  }
  return booksArray
};

// Do not edit below this line
module.exports = getTheTitles;
