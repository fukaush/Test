function priority(op) {
  return op == '+' || op == '-'  ? 1 : op == '*' || op == '/' ? 2 : -1;
}

export default function rpn(str) {
  let result = [];
  let temp = [];
  let strLength = str.length;

  for(let i = 0; i < strLength; i++){
    let c = str[i];
    if(priority(c) > 0){
      let lastItem = temp[temp.length-1];
      if(priority(lastItem) >= priority(c)){
        result.push(temp.pop());
      }
      temp.push(c);
    } else {
      result.push(c);
    }
  }

  let tempLength = temp.length;
  for(let i = 0; i < tempLength; i++){
    result.push(temp.pop());
  }

  return result;
}


