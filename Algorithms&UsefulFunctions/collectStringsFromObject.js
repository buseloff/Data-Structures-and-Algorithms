module.exports.collectStringsFromObject = function collectStringsFromObject(
  obj
) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStringsFromObject(obj[key]));
    }
  }
  return stringsArr;
};
