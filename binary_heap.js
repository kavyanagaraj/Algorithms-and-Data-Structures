// Binary Heap 
// Min heap array implementation

//Min Heap
class MinHeap{
    constructor(){
        this.heap_list = [0]
    }
}

// Min Heap insert
MinHeap.prototype.insert = function(val){
    this.heap_list.push(val);
    var ind = this.heap_list.length-1;
    var parent;
    ind % 2 == 0 ? parent = ind/2 : parent = (ind-1)/2;
    // Checking if parent element is less than child elements
    while(parent > 0 && this.heap_list[ind] < this.heap_list[parent]){
        //Swapping parent and the child element since child element is greater than parent
        var temp = this.heap_list[parent];
        this.heap_list[parent] = this.heap_list[ind];
        this.heap_list[ind] = temp;
        ind = parent;
        parent = Math.floor(parent/2);
    }
}

var arr = [1,6,4,3,2,0,20,5,8];
var heap = new MinHeap();
for(var i = 0; i < arr.length; i++){
    heap.insert(arr[i]);
}

console.log(heap.heap_list);

