const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if(arr[i - 2] != '--discard-next') {
        newArr.pop();
        }
        break;
      case '--double-next':
          newArr[i] = arr[i + 1];
        break;
      case '--double-prev':
        if(arr[i - 2] != '--discard-next') {
          newArr[i] = arr[i - 1];
        }
        break;
      default:
        newArr[i] = arr[i];
        break;
    }
  }
  return newArr.filter(val => val != undefined);
};
