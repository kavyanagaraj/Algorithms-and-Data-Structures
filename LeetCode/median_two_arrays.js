// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0

function find_median(arr1, arr2){
  var median, isEven;
  if((arr1.length + arr2.length) % 2 != 0){
    median = Math.ceil((arr1.length + arr2.length) / 2);
    isEven = false;
  }
  else{
    median = (arr1.length + arr2.length) / 2;
    isEven = true;
  }
  var mid, mid1, i=0; j=0;;
    for(var count = 1; count <= median+1; count++){
      console.log(count);
      if(arr1[i] > arr2[j]){
        if(count == median){
          mid = arr2[j];
        }
        if(count == median+1){
          mid1 = arr2[j];
        }
        console.log("mid, mid1 j", mid, mid1);
        j++;
      }
      else{
        if(count == median){
          mid = arr1[i];
        }
        if(count == median+1){
          mid1 = arr1[i];
        }
        console.log("mid, mid1 i", mid, mid1);
        i++;
      }
    }
    console.log(mid, mid1, isEven);
    return isEven ? (mid+mid1)/2 : mid
  }

console.log(find_median([1,2], [3,4]));
