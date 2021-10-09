module.exports.isAnagram = function (firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < firstWord.length; i++) {
    let letter = firstWord[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < secondWord.length; i++) {
    let letter = secondWord[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};


