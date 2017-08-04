class Trie{
    constructor(){
        this.root = new TrieNode('');
    }
}

class TrieNode{
    constructor(val){
        this.val = val;
        this.isWord = false;
        this.children = {};
    }
}

Trie.prototype.insert = function(word){
   if(!word){
       return false; 
   }
   this.root.insert(word);
   return this;
}

TrieNode.prototype.insert = function(word, upto){
    var at_end = false;
    if(!upto){
        var upto = word[0];
    }
    if(word.length == upto.length){
        at_end = true;
    }
    var checkChar = word[upto.length-1];
    if(!this.children[checkChar]){
        this.children[checkChar] = new TrieNode(checkChar);
    }
    if(at_end){
        this.children[checkChar].isWord = true;
        return this;
    }
    else{
        this.children[checkChar].insert(word, upto + word[upto.length])
    }
}

var trie = new Trie();
console.log(trie.insert("cat"));
console.log(trie.insert("cane"));
