// Given a list, rotate the list to the right by k places, where k is non-negative.
// Leetcode 61
// For example:
// Given 1->2->3->4->5->NULL and k = 2,
// return 4->5->1->2->3->NULL.

var linked_list = require("../linked_list")

/**
 * @param {SLL} list
 * @param {number} k
 * @return {list}
 */
var rotateRight = function(list, k) {
    if(!list.head){
       return list 
    }
    if(k == 0){
        return list;
    }
    var curr = list.head;
    var k_prev, prev;
    var count = 1;
    while(curr.next){
        count++;
        if(k_prev){
            k_prev = k_prev.next;
        }
        if(count == k+1){
            k_prev = list.head;
        }
        prev= curr
        curr = curr.next
    }
    if (k > count){
        k = k % count;
        if(k == count || k == 0){
            return list;
        }
        return rotateRight(list, k)
    }
    if(k == count){
        return list;
    }
    if(k == 1){
        curr.next = list.head;
        prev.next = null;
        list.head = curr
    }else if (k_prev){
        var kth_node = k_prev.next;
        curr.next = list.head;
        k_prev.next = null;
        list.head = kth_node;  
    }
    return list;  
};

var list = new linked_list();
for(var i = 1; i < 6; i++){
    list.insert(i);
}

rotateRight(list, 10).display();