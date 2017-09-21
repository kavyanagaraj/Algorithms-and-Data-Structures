// Write a function that given a sentence, reverses the letters in each word but keeps the order of the words the same.
// 'hello world how are you' => 'olleh dlrow woh era uoy'

//Splitting the string on space
//Looping through and reversing each string
//join on space

function reverse_strings(str){
    str = str.split(" ");
    for(var i = 0; i < str.length; i++){
       str[i] = reverse(str[i])
    }
    str = str.join(" ");
    return str;
}

function reverse(str){
    var reversed_str = "";
    for(var i = str.length-1; i > 0; i--){
        reversed_str += str[i];
    }
    return reversed_str;
}
