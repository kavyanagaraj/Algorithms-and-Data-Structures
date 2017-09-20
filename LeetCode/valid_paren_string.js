// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    if(s.length == 0){
        return true;
    }
    var stack = [], count = 0,count_used = 0;
    for(var i = 0; i < s.length; i++){
        if(s[i] == '*'){
            count++;
        }
        else if(s[i] == '('){
            stack.push(s[i]);
        }
        else if(s[i] == ')' && count == 0 && stack.length == 0){
            return false;
        }else{
            if(count > 0){
                count--;
                count_used++
            }else{
                stack.pop()
            }
        }    
    }
    console.log(count, count_used, stack);
    if(stack.length > count_used){
        return false;
    }
    return true;
};

console.log(checkValidString('**)'))