var str = "daBcd"
var str1 = "ABC"
str = str.toUpperCase()
var ind = str.indexOf(str1);
if(ind == -1){
  console.log(false);
} else{
  console.log("No");
}
console.log(str);
str = str.slice(ind, str1.length+1);
console.log(str);
console.log(ind);
