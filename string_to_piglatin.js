// As a user I can enter a phrase "hello" and see it translated to Pig Latin "ellohay"
// As a user I can enter a phrase "hello world" and see it translated to Pig Latin "ellohay orldway"
// As a user I can enter a phrase "Hello world" and see it translated to Pig Latin "Ellohay orldway"
// As a user I can enter a phrase "Hello, world!!" and see it translated to "Ellohay, orldway!!"
// As a user I can enter a phrase "eat apples" and see it translated to Pig Latin "eatay applesay"
// As a user I can enter a phrase "quick brown fox" and see it translated to Pig Latin "ickquay ownbray oxfay"

function str_to_piglatin(str){
  var temp = str.slice(0,1);
  if(isVowel(temp)){
    return str + "ay";
  }
  str = str.slice(1);
  if(str.match(/[,!.?]+/)){
      var match_punctuations = str.match(/[,!.?]+/).index;
      var punctuations = str.slice(match_punctuations);
      str = str.slice(0,match_punctuations);
      result = str + temp + "ay" + punctuations
  }else{
    result = str + temp + "ay"
  }
  return result;
}

function sentence_to_piglatin(str){
  var arr = str.split(" ")
  for(var i = 0; i < arr.length; i++){
    arr[i] = str_to_piglatin(arr[i]);
  }
  var temp = str[0];
  str = arr.join(" ");
  if(/[A-Z]/.test(temp)){
    str = str[0].toUpperCase() + str.slice(1);
  }
  return str;
}

function isVowel(char){
  return /[aeiou]/i.test(char);
}

console.log(sentence_to_piglatin("hello world"));
console.log(sentence_to_piglatin("Hello world"));
console.log(sentence_to_piglatin("hello, world!!"));
console.log(str_to_piglatin("hello"));
console.log(sentence_to_piglatin("eat apples"));
