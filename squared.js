//Return the number of squared numbers between start to end

function square(start, end) {
    if(start < 1){
      start = 1;
    }
    start = Math.ceil(Math.sqrt(start));
    var count = 0;
    while(true) {
        var squared = start*start;
        if (squared <= end) {
            count++;
            start++;
        }else{
            break;
        }
    }
    return count;
}
//
console.log(square(-10, -1));
