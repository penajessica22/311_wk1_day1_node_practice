const isEven = (num) => {
  // write code for numbers.isEven
 if (num % 2 === 0){
   return true;
 } else if(num2 % 3 === 1){
   return false;
 }
}


// const sum = (arr) => 
function sumIt(arr) {
  // write code for numbers.sum
  return (arr.length === 0) ? 0 : arr[0] + sumIt(arr.slice(1));
}
const comboSum = (arr, num) => {
  // write code for numbers.comboSum
  let thisSum = sumIt(arr);
  if (thisSum === num){
    return true;
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}