module.exports = function check(str, bracketsConfig) {
   flag = true;
    while(flag){
        flag=false;
      for(e of bracketsConfig){
          brackets = e[0]+e[1];
          while(str.includes(brackets)){
                  str = str.slice(0,str.indexOf(brackets)) + str.slice(str.indexOf(brackets)+brackets.length);
                  flag=true;
          }
      }
  }
  if(str)
      return false;
  else
      return true;
}