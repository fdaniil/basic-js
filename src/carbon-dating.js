const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(typeof sampleActivity != "string")
    return false;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)/Math.LN2*HALF_LIFE_PERIOD);
  return  isNaN(result) || result < 0 || result == Infinity || result == -Infinity ? false : result;
  
}