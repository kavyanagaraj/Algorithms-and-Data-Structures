//LeetCode add two numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

function Node(val){
  this.val = val;
  this.next = null;
}

function SLL(){
  this.head = null;
  this.tail = null;
}

SLL.prototype.add_two_lists = function (list1, list2) {
  var newList = new SLL();
  var curr1 = list1.head;
  var curr2 = list2.head;
  var quo = 0
  var rem = 0;
  while(curr1 && curr2){
    var newVal = curr1.val + curr2.val + quo;
    quo = newVal/10;
    rem = newVal%10;
    if(!newList.head){
      newList.head = new Node(rem);
      newList.tail = newList.head;
    }
    else{
      newList.tail.next = new Node(rem);
      newList.tail = newList.tail.next;
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  return newList;
}
