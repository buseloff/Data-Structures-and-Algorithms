module.exports.recursiveRange = function recursiveRange(x) {
  if (x < 0) throw new Error("Value less than 0!");
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
};
