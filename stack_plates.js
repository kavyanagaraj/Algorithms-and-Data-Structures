//Cracking the Coding Interview Stack And Queues 3.3
//Stack plates with max capacity

class setOfStacks{
  constructor(){
    this.max = 10
    this.stack = [];
  }

  push(val){
    var lastStack = this.stack[this.stack.length-1]
    if(this.stack.length == 0 || lastStack.length == this.max){
      this.stack.push([val]);
    } else{
      lastStack.push(val);
    }
    return this;
  }

  pop(){
    if(this.stack.length == 0){
      return this;
    }
    else{
      var lastStack = this.stack[this.stack.length-1]
      var temp = lastStack.pop();
      if(lastStack.length == 0){
        this.stack.pop();
      }
      return temp;
    }
  }

  popAt(ind){
    var stack = Math.floor(ind / (this.max));
    var stack_ind = ind % (this.max);
    if(stack > this.stack.length){
      return this;
    }
    this.stack[stack].splice(stack_ind, 1);
    // if(this.stack[stack].length == 0){
    //   this.stack.pop();
    // }
    for(var i = stack+1; i < this.stack.length; i++){
      var temp = this.stack[stack+1].splice(0,1);
      this.stack[stack].push(temp[0]);
      stack++;
    }
  }
}

var arr = new setOfStacks();
for(var i =0; i < 41; i ++){
  arr.push(i);
}

for(var i =0; i < 7; i ++){
  arr.pop();
}

arr.popAt(10);
arr.popAt(22);
arr.popAt(31);
arr.popAt(30);
arr.popAt(30);


console.log(arr.stack);
