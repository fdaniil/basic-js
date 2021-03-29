const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(isStraight = true) {
    if(typeof isStraight != 'boolean')
      throw Error;
    this.isStraight = isStraight;
  }

  encrypt(phrase, key) {
    if(arguments.length < 2 || typeof phrase != 'string' || typeof phrase != 'string')
      throw Error;

    let keyPos = 0,
    encPhrase = "";

    for(let i = 0; i < phrase.length; i++) {
      if(/[A-Za-z]/.test(phrase[i])) {
        encPhrase += String.fromCharCode(("A".charCodeAt() + (phrase[i].toUpperCase().charCodeAt() + key[keyPos%key.length].toUpperCase().charCodeAt()) % 26));
        keyPos++;
      } else {
        encPhrase += phrase[i];
      }
    }

    return this.isStraight ? encPhrase : encPhrase.split('').reverse().join('');
    
  }    
  decrypt(phrase, key) {
    if(arguments.length < 2 || typeof phrase != 'string' || typeof phrase != 'string')
      throw Error;

    let keyPos = 0,
    encPhrase = "";

    for(let i = 0; i < phrase.length; i++) {
      if(/[A-Za-z]/.test(phrase[i])) {
        encPhrase += String.fromCharCode(("A".charCodeAt() + (phrase[i].toUpperCase().charCodeAt() - key[keyPos%key.length].toUpperCase().charCodeAt()+26) % 26));
        keyPos++;
      } else {
        encPhrase += phrase[i];
      }
    }

    return this.isStraight ? encPhrase : encPhrase.split('').reverse().join('');

  }
}

module.exports = VigenereCipheringMachine;
