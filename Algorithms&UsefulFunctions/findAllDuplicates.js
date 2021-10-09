module.exports.findAllDuplicates = function findAllDuplicates(nums) {
  let duplicates = [];
  var setUnique = new Set();
  for (let i = 0; i < nums.length; i++) {
    setUnique.has(nums[i]) ? duplicates.push(nums[i]) : setUnique.add(nums[i]);
  }
  return ans;
};
