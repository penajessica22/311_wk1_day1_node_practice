const isEven = num => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
    return true;
  } else if (num2 % 3 === 1) {
    return false;
  }
};

function sum(arr) {
  // write code for numbers.sum
  return arr.length === 0 ? 0 : arr[0] + sum(arr.slice(1));
}

// write code for numbers.comboSum
const comboSum = (arr, num) => {
  let thisSum = sum(arr);
  if (thisSum === num) {
    return true;
  } else {
    return false;
  }
};
module.exports = {
  isEven,
  sum,
  comboSum
};
