//Input "abc"
//Output ['', 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']
//In-Order Subsets : Produces all the possible subsets of a string in order

function iOS(str, sub, arr){
  if(!arr){
    arr = []
  }
  if(str.length == 0){
    arr.push(sub);
    return;
  }
  iOS(str.substring(1), sub+str.substring(0,1), arr);
  iOS(str.substring(1), sub, arr);
  return arr;
}

var string = "abcd"
console.log(iOS(string, ""));
