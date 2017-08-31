//Reverse an integer
//Example 123 to be 321

function reverse_integer(num){
  if(num < 0){
    var neg = true;
    num = num * -1;
  }
  var rev = 0;
  while(num != 0){
      rev = rev * 10 + num % 10;
      num = Math.floor(num / 10);
  }
  if (rev > 2147483647 || rev < -2147483647) {
    return 0;
  }
  return neg ? rev * -1 : rev;
}

console.log(reverse_integer(-321))
