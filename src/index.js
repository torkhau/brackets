
module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  let i = 0;
  const lenBracketsConfig = bracketsConfig.length - 1;
  while (i <= lenBracketsConfig) {
    let target = bracketsConfig[i][0] + bracketsConfig[i][1];
    i++;
    let index = str.indexOf(target, 0);
    while (index >= 0) {
      str = str.slice(0, index) + str.slice(index + 2);
      index = str.indexOf(target, 0);
      i = 0;
    };
  };
  return str.length == 0 ? true : false;
};