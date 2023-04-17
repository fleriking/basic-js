const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');

  // remove line with error and write your code here
  const result = [];
  const tmp = {};
  for (let name of names) {
    const isSpy = name.match(/(.*)\((\d+)\)$/);
    let nameSpy = null;
    let countSpy = null;
   
    if (tmp.hasOwnProperty(name) ) {
      result.push(name + `(${tmp[name]})`);
      tmp[name] = tmp[name]+1;
    } else {
      tmp[name] = 1;
      if (isSpy) {
        nameSpy= isSpy[1];
        countSpy = +isSpy[2];
        if (tmp.hasOwnProperty(nameSpy) && countSpy == (tmp[nameSpy]-1)) {
          result.push(name + `(${tmp[name]})`);
          tmp[name] =tmp[name] + 1;
        } else {
          result.push(name);
        }
      } else {
        result.push(name);
      }
      // isSpy ? result.push(name + `(${tmp[name]})`) : result.push(name);
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
