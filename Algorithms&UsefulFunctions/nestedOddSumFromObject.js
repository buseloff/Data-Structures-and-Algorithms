module.exports.nestedOddSumFromObject = function nestedOddSumFromObject(
  obj,
  sum = 0
) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedOddSumFromObject(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 !== 0) {
      sum += obj[key];
    }
  }
  return sum;
};
