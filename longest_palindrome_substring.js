// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

function longest_palindrome(str){
  var newStr = ""
  if(str.length == 1){
        return str;
    }
  for(var i = 0; i < str.length; i++){
    var x = 1, tempStr = '';
    while((str[i-x] && str[i+x]) && (str[i-x] == str[i+x])){
      if(!tempStr){
        tempStr = str[i];
        if (str[i] == str[i+1]){
           tempStr = str[i];
        }
      }
      tempStr = str[i-x] + tempStr + str[i+x];
      x++;
    }
    newStr = longer_string(newStr, tempStr);

    if(str[i] == str[i+1]){
      tempStr = str[i] + str[i+1];
      x = 1
      while((str[i-x] && str[i+x+1]) && (str[i-x] == str[i+x+1])){
        tempStr = str[i-x] + tempStr + str[i+x+1];
        x++;
      }
    }
    newStr = longer_string(newStr, tempStr);
  }
  return !newStr ? str[0] : newStr;
}

function longer_string(str1, str2){
  console.log(str1, str2);
  return str1.length > str2.length ? str1 : str2;
}

console.log(longest_palindrome("aaaa"));
