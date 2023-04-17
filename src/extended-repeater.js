const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const separator = options.separator ? options.separator : '+';
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 0;
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0;
  const myStr = String(str);
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  let addresult = '';
  let result = '';
  for (let i = 0; i < additionRepeatTimes -1; i++){
    addresult = addresult + addition + additionSeparator;
  } 
  addresult+= addition;
  for (let i = 0; i < repeatTimes -1; i++){
    result = result + myStr + addresult + separator;
  }
  result+= myStr + addresult;
  return result;
}

module.exports = {
  repeater
};
