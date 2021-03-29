const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = "";
  let separator = 'separator' in options ? options.separator : '+',
  additionSeparator = 'additionSeparator' in options ? options.additionSeparator : '|',
  repeatTimes = 'repeatTimes' in options ? options.repeatTimes : 1,
  additionRepeatTimes = 'additionRepeatTimes' in options ? options.additionRepeatTimes : 1,
  addition = 'addition' in options ? options.addition : "";
  //.repeat(5).slice(0,-1)

  return (str+((addition+additionSeparator).repeat(additionRepeatTimes).slice(0,-additionSeparator.length))+separator).repeat(repeatTimes).slice(0,-separator.length);
};
  