// Binary Search 

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
}

BST.prototype.insert = function(val, node){
    if(!this.root){
        this.root = new Node(val);
        return this;
    }

    node = node || this.root

    if(val < node.val){
        node.left ? this.insert(val, node.left) : node.left = new Node(val);
    } 
    else{
        node.right ? this.insert(val, node.right) : node.right = new Node(val); 
    }
    return this;
}

BST.prototype.preorder = function(node){
    if(!node){
        return;
    }
    console.log(node.val);
    this.preorder(node.left);
    this.preorder(node.right);
}

BST.prototype.inorder = function(node){
    if(node){
        this.inorder(node.left);
        console.log(node.val);
        this.inorder(node.right);
    }
    return this;
}

BST.prototype.postorder = function(node){
    if(node){
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.val);
    }
    return this;
}


var bst = new BST();
bst.insert(5).insert(2).insert(9).insert(1).insert(4);
bst.preorder(bst.root);