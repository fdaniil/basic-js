const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let n = 0;
  matrix.forEach(v => v.forEach(e => n += e == "^^" ? 1 : 0));
  return n;
};
