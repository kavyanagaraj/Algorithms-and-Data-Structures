// Determine whether an integer is a palindrome. Do this without extra space.
// LeetCode 9

function is_palindrome(number){
    number = parseInt(number);
    if(number < 0 || (number != 0 && number%10 == 0)) return true;
    var reverse = 0;
    while(number > reverse){
        reverse = (reverse*10) + (number%10);
        number = Math.floor(number/10);
    }
    return (number==reverse || number==Math.floor(reverse/10));
}

console.log(is_palindrome(222));
