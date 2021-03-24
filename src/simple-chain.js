const CustomError = require("../extensions/custom-error");

const chainMaker = {

  x: "",

  getLength() {
    return this.x.split("~~").length;
  },
  addLink(value) {
    if(!arguments.length)
      value = "";
    if (this.x != "")
      this.x += "~~";
    this.x += `( ${value} )`;
    return this;
  },
  removeLink(position) {
    if (typeof position != "number" || ![...this.x.split("~~").keys()].includes(position)) {
      this.x = "";
      throw Error;
    }
    this.x = this.x.split("~~").filter((e, k) => k != position - 1).join("~~");
    return this;
  },
  reverseChain() {
    this.x = this.x.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    let res = this.x;
    this.x = "";
    return res;
  }
};

module.exports = chainMaker;
