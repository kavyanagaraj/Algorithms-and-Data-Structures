// Implement a magic directory with buildDict, and search methods.
// For the method buildDict, you'll be given a list of non-repetitive words to build a dictionary.
// For the method search, you'll be given a word, and judge whether if you modify exactly one character into another character in this word, the modified word is in the dictionary you just built.

// Input: buildDict(["hello", "leetcode"]), Output: Null
// Input: search("hello"), Output: False
// Input: search("hhllo"), Output: True
// Input: search("hell"), Output: False
// Input: search("leetcoded"), Output: False

// LeetCode 676

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.root = null;
};

var MagicNode = function(val){
    this.val = val;
    this.word = false;
    this.children = {}
}

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    if(!this.root){
        this.root = new MagicNode("")
    }
    for(var i = 0; i < dict.length; i++){
      var curr = this.root
      for(var j = 0; j < dict[i].length; j++){
        if(dict[i][j] in curr.children){
        }
      }
    }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {

};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
