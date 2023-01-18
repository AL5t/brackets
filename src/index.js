module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i = i + 1) {
    for (let j = 0; j < str.length; j = j + 1) {
      if (str[j] === bracketsConfig[i][0] && str[j + 1] === bracketsConfig[i][1]) {
        if (str.length === 2) {
          str = '';
        } else {
          str = str.slice(0, j) + str.slice(j + 2, str.length);
          j = -1;
          i = 0;
        }
      }
    }
  }
  return str === '';
}
