module.exports = function check(str, bracketsConfig) {
  if (str.length < 2) {
    return false
  };
    
  let openers = [];
  let closers = [];
    
    for (let arr of bracketsConfig) {
      openers.push(arr[0]);
      closers.push(arr[1]);
    }
    
  let s = [];
  let bracket;
  let openBracket;
  
  for (let i = 0; i < str.length; i++) {
      
      bracket = str[i];
      
      if (closers.indexOf(bracket) > -1) {
        openBracket = openers[closers.indexOf(bracket)]
        
        if (s.length == 0 || (s.pop() != openBracket)) {
          return false;
        }
      } else {
        s.push(bracket);
      }
    }
  
    return (s.length == 0)
  
}
