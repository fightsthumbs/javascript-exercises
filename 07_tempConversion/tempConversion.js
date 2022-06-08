
const toFixedNum = (value, decimal=1) => {
  if (typeof value === "number") {
    return parseFloat(value.toFixed(decimal));

  }
}

const ftoc = function(fh) {
  const celsius = (fh - 32) * (5/9);
  const convertedNum = toFixedNum(celsius);
  return convertedNum;

};

const ctof = function(cl) {
  const farenheit = (cl * (9/5) + 32)
  const convertedNum = toFixedNum(farenheit);
  return convertedNum;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
