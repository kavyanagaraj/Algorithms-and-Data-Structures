//Leetcode 3
// Given a string, find the length of the longest substring without repeating characters.
// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} str
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    var longest = ""
    var dict = {}
    var curr = ""
    for(var i=0; i<str.length; i++){
        if(!dict[str[i]]){
            curr += str[i];
            dict[str[i]] = true;
        }
        else{
            if(curr.length > longest.length){
                longest = curr;
            }
            curr = "";
            dict = {};
            curr += str[i]
            dict[str[i]] = true;
        }
    }
    return longest.length
};

console.log("The length of longest substring is",lengthOfLongestSubstring("pwwkew"));
