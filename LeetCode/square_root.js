// Implement int sqrt(int x).
// Compute and return the square root of x.
// LeetCode 69

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0){
        return 0;
    } else if(x == 1){
        return 1;
    }
    var maxNumber = 1;
    var squared = maxNumber * maxNumber
    while(squared < x){
        maxNumber++;
        squared = maxNumber * maxNumber;
    }
    if(squared == x){
        return maxNumber;
    }
    // var number = x/(maxNumber-1);
    // return (number + (maxNumber-1))/2;
    return maxNumber-1;
};

console.log(mySqrt(3))