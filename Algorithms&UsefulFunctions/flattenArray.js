module.exports.flattenArray = function flattenArray(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flattenArray(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
};
