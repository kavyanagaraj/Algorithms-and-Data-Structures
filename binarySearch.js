function binary_search(arr, val){
  if(arr.length <= 1 && arr[0] != val){
    return false;
  }
  var mid = Math.floor(arr.length/2);
  if(arr[mid] == val){
    return true;
  } else if(val > arr[mid]){
    return binary_search(arr.slice(mid+1), val);
  } else{
    return binary_search(arr.slice(0, mid-1), val);
  }
  return false;
}

var array = [1,2,3,4,5]
console.log(binary_search(array, 10));
