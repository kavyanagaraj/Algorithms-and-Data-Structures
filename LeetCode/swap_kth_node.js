//Swap kth node from the beginning and end of the list
//Do not swap the values but swap the nodes itself
//Eg: List : 1-->2-->3-->4-->5--> k = 2
// Result : 1-->4-->3-->2-->5-->
var linked_list = require('../linked_list.js');
var list = new linked_list();

function create_list(){
  for(var i = 1; i < 7; i++){
    list.insert(i);
  }
  return list;
}
var list = create_list();

function swap_kth(list, k){
  if(!list.head){
    return this;
  }
  var curr = list.head;
  var count = 1;
  var beg_prev, end_prev, prev;
  
  while(curr.next){
    count++;
    if(count == k){
      beg_prev = curr;
    }
    if(end_prev){
      end_prev = end_prev.next;
    }
    if(count == k+1){
      end_prev = list.head;
    }
    prev = curr;
    curr = curr.next;
  }
  
  var begin_next;
  if(k == count || k == 1){
    begin_next = list.head.next;  
    prev.next = list.head;
    curr.next = begin_next;
    list.head.next = null;
    list.head = curr;
    return list;
  }

  if(beg_prev && end_prev){
    if(beg_prev == end_prev){
      return this;
    }
    if(k > count/2){
      var temp = end_prev;
      end_prev = beg_prev;
      beg_prev = temp;
    }
    begin_next = beg_prev.next.next;
    var beginning_kth = beg_prev.next;
    var end_kth = end_prev.next;
    var end_next = end_prev.next.next;
        
    if(beginning_kth == end_prev || end_kth == beg_prev){
      beginning_kth.next = end_next;
      beg_prev.next = end_kth;
      end_kth.next = beginning_kth;
    }
    else{
      beg_prev.next = end_kth;
      end_kth.next = begin_next;
      end_prev.next = beginning_kth;
      beginning_kth.next = end_next;
    }
  }  
  return list;
}

for(var i = 0; i <= 7; i++){
  console.log("k is", i);
  swap_kth(list, i).display();
  swap_kth(list, i);
}

// swap_kth(list, 4).display();

