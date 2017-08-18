//Return max words of a sentence 

function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    var sentences = S.split('.').join(',').split('?').join(',').split('!').join(',').split(",");
    var maxWords = 0;
    for(var i = 0; i < sentences.length; i++){
      var curr = sentences[i].trim() //To remove trailing and leading spaces
      curr = curr.replace(/ +(?= )/g,'').split(' '); // Removing multiple spaces and splitting on a space
      if(curr.length > maxWords){
        maxWords = curr.length;
      }
    }
    return maxWords;
}

console.log(solution("We test coders. Give us a try  ?"));
