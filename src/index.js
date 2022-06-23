module.exports = function check(str, bracketsConfig) {
  
  let pairs = bracketsConfig.map(arr => arr.join('')); //создаем пары вида () из массивов "скобок"
  
  for (let i = 0; i < str.length; i++) {

    for (let item of pairs) {
      if (str.indexOf(item) > -1) {
        str.replace(item, '')
      }
    }
    
  }
  return (!str) ? true : false;

}
