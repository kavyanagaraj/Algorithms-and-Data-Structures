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

Trie.prototype.contains = function(word){
    if(!word){
        return false; 
    }  
    return this.root.contains(word);
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

TrieNode.prototype.contains = function(word, upto){  
    if(!upto){
        var upto = word[0];
    }
    var node = this.children[word[upto.length-1]];
    if(node){
        if(word.length == upto.length && node.isWord){
            return true;
        }
        upto += word[upto.length];
        return node.contains(word, upto);
    }
    else{
        return false;
    }
}

var trie = new Trie();
console.log(trie.insert("cat"));
console.log(trie.insert("cane"));
console.log(trie.contains("cane"));
