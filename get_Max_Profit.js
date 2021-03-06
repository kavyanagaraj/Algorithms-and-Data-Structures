// Question : Write an efficient function that takes stock_prices_yesterday and returns the best profit I
//           could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
// stock_prices_yesterday = [10, 7, 5, 8, 11, 9]
// get_max_profit(stock_prices_yesterday)
// returns 6 (buying for $5 and selling for $11)
//
// Can have a dictionary instead of having so many variables

function get_max_profit (arr) {
    // write the body of your function here
    var min = arr[0];
    var max = arr[0];
    var minIndex = 0;
    var maxIndex = 0;
    var posMin = arr[0]
    var posIndex = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] < min){
          min = arr[i];
          minIndex = i;
          maxIndex = 0;
        }
        if(arr[i] > min && i > minIndex && maxIndex < minIndex){
            posMin = min;
            posIndex = minIndex
            max = arr[i];
        }
    }

    if (posIndex == maxIndex) {
      return min-max;
    }
    else if(minIndex > maxIndex){
      min = posMin;
    }

    console.log(max);
    console.log(min);
    return max-min;
}

stock_prices_yesterday = [10, 7, 5, 8, 4, 1]

console.log("Max Profit",get_max_profit(stock_prices_yesterday));


function get_max_profits(arr, k) {
    // write the body of your function here
    var trans = [];
    var minInd = 0;
    var maxInd = 0;
    var diff = 0
    for(var i = 0; i < arr.length; i++){
      if(arr[i] < arr[minInd] || arr[i] < arr[maxInd]){
        if(minInd < maxInd){
          trans.push({min : minInd, max : maxInd, diff: diff});
        }
        minInd = i;
      }
      if(arr[i] > arr[minInd] && i > minInd){
        maxInd = i;
        diff = arr[maxInd] - arr[minInd];
      }
    }
    if(trans.length > 0 && minInd > trans[trans.length-1].max && maxInd > minInd){
      trans.push({min: minInd, max: maxInd, diff: diff})
    }
    console.log(trans);
}
get_max_profits([10, 22, 5, 75, 65, 80])
