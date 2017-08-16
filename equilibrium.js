// A zero-indexed array A consisting of N integers is given.
// An equilibrium index of this array is any integer P such that 0 ≤ P < N and the sum of elements
// of lower indices is equal to the sum of elements of higher indices

function equi(arr){
  if(!arr || arr.length == 0){
    return -1;
  }
  var leftSum = 0;
  var totalSum = arr.reduce((sum, curr) => {return sum+curr});
  for(var i = 0; i < arr.length; i++){
      totalSum -= arr[i];
      if(leftSum == totalSum){
        return i;
      }
      leftSum += arr[i];
  }
}

var eq = equi([-1, 3, -4, 5, 1, -6, 2, 1]);
console.log(eq);
