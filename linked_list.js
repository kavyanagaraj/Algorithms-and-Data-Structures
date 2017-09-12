module.exports = class SLL{
  constructor(){
      this.head = null;
  }
  
  insert(val){
    if(!this.head){
      this.head = new node(val);
      return this;
    }
    var curr = this.head;
    while(curr.next){
      curr = curr.next;
    }
    curr.next = new node(val);
    return this;
  }
  
  display(){
    var str = '';
    var curr = this.head;
    while(curr){
      str += curr.val + "-->";
      curr = curr.next;
    }
    console.log(str);
    return this;
  }
}

class node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

// var list = new SLL();
// for(var i = 1; i < 6; i++){
//   list.insert(i);
// }
// list.display();



