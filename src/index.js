module.exports = function check(str, bracketsConfig) {
  
  let pairs = bracketsConfig.map(arr => arr.join('')); 
  //создаем пары вида () из массивов "скобок"
    
    for (let i = 0; i < str.length; i++) {
  
      for (let item of pairs) {
        if (str.indexOf(item) > -1) {
          str = str.replace(item, '')
          console.log(str)
        }
      }
  //если в строке есть любая пара из pairs, то "удаляем" её, заменяя на ''. И так в цикле
      
    }
    return (!str) ? true : false;
  //если после всех манипуляций длина строки равна 0, то всё верно, если нет, то ложно
  } 
