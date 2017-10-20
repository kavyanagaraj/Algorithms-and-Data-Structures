//Move all -1 to the end of the list

function rearrange(arr){
    if(arr.length == 1){
        return arr;
    }
    var j = arr.length-1
    for(var i = 0; i < j; i++){
        if(arr[i] === -1){
            while(j > i && arr[j] === -1){
                j--;
            }
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}

// for (let i = 0; i < j; i++) {
//     while (arr[i] === -1 && j > i) {
//       // if arr[j] is not zero, swap arr[i] arr[j], otherwise j--
//       console.log(`swapping ${i} ${j}`);
//       arr[j] !== -1? [arr[i], arr[j]] = [arr[j], arr[i]]: j--;
//     }
// }

var array = [-1,2,3,5,-1,-1,-1,-1,7,3]
console.log(rearrange(array));