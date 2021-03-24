const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.flat().reduce((a,b) => b == "^^" ? a+1 : a, 0);
};
