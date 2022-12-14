const findTheOldest = function(peopleArray) {

  const orderedList = peopleArray.sort((a,b) => {
    const aAge = (a.hasOwnProperty("yearOfDeath") ? a.yearOfDeath : ((new Date().getFullYear()))) - a.yearOfBirth;
    const bAge = (b.hasOwnProperty("yearOfDeath") ? b.yearOfDeath : (new Date().getFullYear())) - b.yearOfBirth;
    
    return aAge < bAge ? 1 : -1;
  });

  return orderedList[0];

  
};

// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ]
// findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
