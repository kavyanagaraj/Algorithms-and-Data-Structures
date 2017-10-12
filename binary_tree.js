// Binary Tree Implementation and traversals

class BinaryTree{
    constructor(){
        this.root = null;
    }
}

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

BinaryTree.prototype.insert = function(val, node){
    if(!this.root){
        this.root = new Node(val);
        return this;
    }
    if(!node){
        node = this.root;
    }

    if(!node.left){
        node.left = new Node(val);
        return this;
    }else if(!node.right){
        node.right = new Node(val);
        return this;
    }else{
        this.insert(val, node.left);
    }
    return this;
}


BinaryTree.prototype.post_order = function(node){
    if(node){     
        this.post_order(node.left); 
        this.post_order(node.right);
        console.log(node.val);
    }
    return;
}

BinaryTree.prototype.pre_order = function(node){
    if(node){   
        console.log(node.val);  
        this.pre_order(node.left); 
        this.pre_order(node.right);
    }
    return;
}

BinaryTree.prototype.in_order = function(node){
    if(node){     
        this.in_order(node.left); 
        console.log(node.val);
        this.in_order(node.right);
    }
    return;
}

BinaryTree.prototype.isBalanced = function(){
    return Math.abs((this.height(this.root.left)-this.height(this.root.right))) > 1 ? false : true
}

BinaryTree.prototype.height = function(node){
    if(!node){
        return 0;
    }
    return Math.max(this.height(node.left), this.height(node.right))+1
}

let tree = new BinaryTree();
let arr = [1,2,3,4,5];

for(var i = 0; i < arr.length; i++){
    tree.insert(arr[i]);
}

console.log("------------------------");
console.log("Post Order tree traversal");
tree.post_order(tree.root);
console.log("------------------------");
console.log("In Order tree traversal");
tree.in_order(tree.root);
console.log("------------------------");
console.log("Pre Order tree traversal");
tree.pre_order(tree.root);
console.log("------------------------");
console.log("Is the tree balanced", tree.isBalanced());


