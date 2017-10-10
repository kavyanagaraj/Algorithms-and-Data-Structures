// How to find if the linked list is circular or has a loop

// Following Floyd's alogrithm to determine
// Tortoise Hare problem - Have two pointers and pace it differently
var SLL = require("./linked_list")
var linked_list = new SLL();
var looping_pointer, end_pointer;
for(var i = 1; i < 10; i++){
    (i == 1) ? looping_pointer = linked_list.insert(i) : end_pointer = linked_list.insert(i);
}

end_pointer.next = looping_pointer;

function has_loop(list){
    var curr = list.head, hare = list.head;
    while(curr.next && hare && hare.next && hare.next.next){
        curr = curr.next;
        hare = hare.next.next;
        if(hare == list.head || (hare && hare.next == curr)){
            return true;
        }
    }
    return false;
}
console.log(has_loop(linked_list));



