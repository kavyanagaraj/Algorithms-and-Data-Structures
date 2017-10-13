// Binary Heap 
// Min heap array implementation

//Min Heap
class MinHeap{
    constructor(){
        this.heap_list = [0]
    }
}

// Min Heap insert - logn runtime 
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

MinHeap.prototype.find_min = function(){
    return this.heap_list[1];
}

MinHeap.prototype.extract_min = function(){
    var parent = 1;
    var min = this.heap_list[parent];
    var child, child1, min_child;
    this.heap_list[parent] = this.heap_list[this.heap_list.length-1];
    this.heap_list.pop();
    while(this.heap_list[parent] && parent < this.heap_list.length-1){
        child = parent * 2;
        child1 = (parent * 2)+1;
        this.heap_list[child] > this.heap_list[child1] ? min_child = child1 : min_child = child;
        if(this.heap_list[parent] > this.heap_list[min_child]){
            let temp = this.heap_list[parent];
            this.heap_list[parent] = this.heap_list[min_child];
            this.heap_list[min_child] = temp;
            parent = min_child;
        }else{
            break;
        }
    }
    return min;
}

var arr = [1,6,4,3,2,0,20,5,8];
var heap = new MinHeap();
for(var i = 0; i < arr.length; i++){
    heap.insert(arr[i]);
}

console.log(heap.heap_list);
console.log("Minimum element of the heap", heap.find_min());
console.log("Extract min", heap.extract_min());
console.log(heap.heap_list);


