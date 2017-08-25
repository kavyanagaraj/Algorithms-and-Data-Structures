//Cracking the Coding Interview Stack And Queues 3.3
//Stack plates with max capacity

class setOfStacks{
  constructor(max){
    if(!max){
      this.max = 100
    }else{
      this.max = max
    }
    this.stack = []
  }

  push(val){
    var lastStack = this.stack[this.stack.length-1]
    if(this.stack.length == 0 || lastStack.stack.length == lastStack.max){
      this.stack.push(new setOfStacks(10));
      lastStack = this.stack[this.stack.length-1]
    }
    lastStack.stack.push(val);
    return this;
  }

  pop(){
    if(this.stack.length == 0){
      return this;
    }
    else{
      var lastStack = this.stack[this.stack.length-1]
      var temp = lastStack.stack.pop();
      if(lastStack.stack.length == 0){
        this.stack.pop();
      }
      return temp;
    }
  }

}


var arr = new setOfStacks();
for(var i =0; i < 21; i ++){
  arr.push(i);
}

for(var i =0; i < 7; i ++){
  arr.pop();
}

arr.popAt(1,0)

console.log(arr.stack);
