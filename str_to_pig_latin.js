// Most words in Pig Latin end in "ay." Use the rules below to translate normal English into Pig Latin.
// 1. If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add "ay."
// Example: Happy = appyh + ay = appyhay
// 2. If a word starts with two consonants move the two consonants to the end of the word and add "ay."
// Example: Child = Ildch + ay = Ildchay
// 3. If a word starts with a vowel add the word "way" at the end of the word.
// Example: Awesome = Awesome +way = Awesomeway

function convert_to_piglatin(str){
  // str = str.toLowerCase();
  if(isVowel(str[0])){
    return str = str + "way";
  }
  else if(!isVowel(str[0]) && !isVowel(str[1])){
    var temp = str.slice(0,2);
    str = str.slice(2)+ temp + 'ay';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  else{
    var temp = str.slice(0,1);
    str = str.slice(1) + temp + "ay"
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

console.log(convert_to_piglatin("Child"));
console.log(convert_to_piglatin("Awesome"));
console.log(convert_to_piglatin("Happy"));

// function isVowel(char){
//   var vowels = {'a' : 1, 'e' : 1, 'i': 1, 'o' : 1, 'u' : 1 };
//   return vowels[char] ? true : false;
// }

function isVowel(x) {  return /[aeiou]/i.test(x); }
