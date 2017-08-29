//Implement reverse polish notation
//Using stack

function calculate(strOne){
  var str = strOne.split(" ")
  var stack = [];
  for(var i = 0; i < str.length; i++){
    if(!isNaN(str[i])){
      stack.push(str[i]);
    }
    else {
      var operand2 = Number(stack.pop());
      var operand1 = Number(stack.pop());
      switch (str[i]) {
        case '+':
          stack.push(operand1 + operand2);
          break;
        case '-':
          stack.push(operand1 - operand2);
          break;
        case '*':
          stack.push(operand1 * operand2);
          break;
        case '÷':
          if(operand2 !== 0){
            stack.push(Math.floor(operand1 / operand2));
          }
          break;
        default:
          break;
      }
    }
  }
  return stack[0];
}

var postfix = '15 7 1 1 + - ÷ 3 * 2 1 1 + + -'
var result = calculate(postfix);
console.log("Result of '", postfix, "' is", result)
