// Implementing Queues using Singly Linked List

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  enqueue(val){
    if(!this.head){
      this.head = new QueueNode(val);
      this.tail = this.head;
      return this;
    }
    this.tail.next = new QueueNode(val);
    this.tail = this.tail.next;
    return this;
  }

  dequeue(){
    if(!this.head){
      return this;
    }
    var temp = this.head;
    this.head = this.head.next;
    return temp;
  }

  display(){
    var str = ''
    var curr = this.head
    while(curr){
      str += curr.val + "-->"
      curr = curr.next;
    }
    return str;
  }

  contains(val){
    if(!this.head){
      return "Queue is empty";
    }
    var curr = this.head;
    while(curr){
      if(curr.val == val){
        return curr;
      }
      curr = curr.next;
    }
    return null;
  }

}

class QueueNode{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

var q = new Queue();
q.enqueue(5).enqueue(4).enqueue(3);
console.log(q.display());
console.log("Dequeued",q.dequeue().val);
console.log(q.display());
console.log("Contains 3?", q.contains(3));
