const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let nt = 2**disksNumber -1;
  return {turns: nt, seconds: Math.floor(nt * 3600/turnsSpeed)}
};
