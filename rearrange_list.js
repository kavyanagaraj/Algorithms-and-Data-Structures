//Move all -1 to the end of the list

function rearrange(arr){
    if(arr.length == 1){
        return arr;
    }
    var j = arr.length-1
    for(var i = 0; i < j; i++){
        if(arr[i] === -1){
            while(j > 0 && j > i && arr[j] === -1){
                j--;
            }
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}

var array = [-1,2,3,5,-1,-1,-1,-1,7,3]
console.log(rearrange(array));