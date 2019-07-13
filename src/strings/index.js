const split = (str, delimeter) => {
  // write code for strings.split
  return str.split(delimeter);
};

const pairs = str => {
  let strArr = Array.from(str);
  const tempArray = [];
  // write code for strings.pairs
  for (let index = 0; index < strArr.length; index += 2) {
    // console.log(index);
    let element = strArr[index];
    let chunks = [element, strArr[index + 1]];
    let joinedChunks = chunks.join("");
    tempArray.push(joinedChunks);
  }
  return tempArray;
};
pairs("abcdefghijklmnop");

const reverse = str => {
  // write code for strings.reverse
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
};

module.exports = {
  split,
  pairs,
  reverse
};
