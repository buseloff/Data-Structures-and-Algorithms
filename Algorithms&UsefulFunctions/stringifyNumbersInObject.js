module.exports.stringifyNumbersInObject = function stringifyNumbersInObject(
  obj
) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbersInObject(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
