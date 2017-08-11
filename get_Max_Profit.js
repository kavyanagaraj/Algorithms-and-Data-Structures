//Question : Write an efficient function that takes stock_prices_yesterday and returns the best profit I
//           could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
// stock_prices_yesterday = [10, 7, 5, 8, 11, 9]
// get_max_profit(stock_prices_yesterday)
// returns 6 (buying for $5 and selling for $11)

function get_max_profit (arr) {
    // write the body of your function here
    var min = arr[0];
    var max = arr[0];
    var minIndex = 0
    var maxIndex = 0;
    // var posMin = arr[0]
    // var posIndex = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] < min){
          // if(minIndex < maxIndex){
          //   console.log("posMin", posMin);
          //   posMin = min;
          //   posIndex = minIndex;
          // }
          min = arr[i];
          minIndex = i;
          maxIndex = 0;
        }
        if(arr[i] > min && i > minIndex && maxIndex < minIndex){
            max = arr[i];
        }
    }
    return max-min;
}

stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

console.log("Max Profit",get_max_profit(stock_prices_yesterday));
