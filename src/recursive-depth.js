const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    if (!Array.isArray(arr))
      return 0;
    return 1 + arr.reduce((a, b) => Math.max(a, this.calculateDepth(b)), 0);
  }
};