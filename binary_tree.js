// Binary Tree Implementation

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

let tree = new BinaryTree();
let arr = [1,2,3,4,5];

for(var i = 0; i < arr.length; i++){
    tree.insert(arr[i]);
}

console.log("Post Order tree traversal");
tree.post_order(tree.root);
console.log("In Order tree traversal");
tree.in_order(tree.root);
console.log("Pre Order tree traversal");
tree.pre_order(tree.root);
// console.log(tree);


