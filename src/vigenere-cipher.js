const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.direct = direct;
  }
  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!message || !key) throw new Error('Incorrect arguments!');
    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.alphabet.includes(messageUpper[i])) {
        const cuurentKey = keyUpper[j % keyUpper.length];
        j++;
        result += this.alphabet[(this.alphabet.indexOf(messageUpper[i]) + this.alphabet.indexOf(cuurentKey)) % this.alphabet.length];
      } else {
        result += messageUpper[i];
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
  decrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) throw new Error('Incorrect arguments!');
    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.alphabet.includes(messageUpper[i])) {
        const cuurentKey = keyUpper[j % keyUpper.length];
        j++;
        const ind = (this.alphabet.indexOf(messageUpper[i]) - this.alphabet.indexOf(cuurentKey)) % this.alphabet.length;
        if (ind >= 0){
          result+= this.alphabet[ind];
        } else {
          result+= this.alphabet[this.alphabet.length + ind];
        }
        // result += this.alphabet.at((this.alphabet.indexOf(messageUpper[i]) - this.alphabet.indexOf(cuurentKey)) % this.alphabet.length);
      } else {
        result += messageUpper[i];
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
