//Implement atoi to convert a string to an integer.
//Leetcode 8
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(str == ""){
        return 0
    }
    str = str.trim();
    // var operator = /[\+-]*/.test(str[0])
    // if( operator || isNumber(str[0])){
    //    var newstr ="";
    //     for(var i = 0; i <str.length; i++){
    //         if(isNumber(str[i])){
    //             newstr += str[i];
    //         }
    //     } 
    // }
    // if(str[0] == "-"){
    //     newstr = parseInt(newstr) * -1
    // }
    // return newstr ? parseInt(newstr) : 0;  
    var number = parseInt(str)
    if(number > 2147483647){
        return 2147483647
    }else if(number < -2147483648){
        return -2147483648
    }
    return number ? number : 0
};

function isNumber(char){
    return /[0-9]/.test(char)
}