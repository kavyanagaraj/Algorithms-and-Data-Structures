// Problem form leetcode
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var dict = {}
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        dict[nums[i]] = i;
        var diff = target-nums[i]
        try{
            var first = dict[diff];
            var second = i;
        }
        catch(err){
            continue;
    	}
    }
    return [first, second];
};

console.log(twoSum([1,7,11,15,2], 9))
