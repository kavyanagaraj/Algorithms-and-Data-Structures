// Implement a MapSum class with insert, and sum methods.

// For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one.

// For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value whose key starts with the prefix.

// Example 1:
// Input: insert("apple", 3), Output: Null
// Input: sum("ap"), Output: 3
// Input: insert("app", 2), Output: Null
// Input: sum("ap"), Output: 5

//LeetCode 677

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.set = {}
 };
 
 /** 
  * @param {string} key 
  * @param {number} val
  * @return {void}
  */
 MapSum.prototype.insert = function(key, val) {
         this.set[key] = val;
 };
 
 /** 
  * @param {string} prefix
  * @return {number}
  */
 MapSum.prototype.sum = function(prefix) {
     var total = 0;
     for(key in this.set){
        if(key.startsWith(prefix)){
            total += this.set[key];
        }
     }
     return total;
 };
 
 /** 
  * Your MapSum object will be instantiated and called as such:
  * var obj = Object.create(MapSum).createNew()
  * obj.insert(key,val)
  * var param_2 = obj.sum(prefix)
  */

var map_sum = new MapSum();
map_sum.insert('apple', 3);
console.log(map_sum.sum('al'));
map_sum.insert('app', 2);
console.log(map_sum.sum('ap'));
