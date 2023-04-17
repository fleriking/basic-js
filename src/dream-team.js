const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!(members instanceof Array)) return false;
  const clearMembers = [];
  members.forEach(elem=>{
    if (typeof elem === 'string') {
      // let sss = elem.match(/[a-z]/i)
      if (elem.match(/[a-z]/i)) {
        clearMembers.push(elem.match(/[a-z]/i)[0].toUpperCase());
      }
    }
  })
  return clearMembers.sort().join('') ? clearMembers.sort().join('') : false;
}

module.exports = {
  createDreamTeam
};
