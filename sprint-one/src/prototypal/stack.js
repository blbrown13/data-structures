var Stack = function() {
 var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.length = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function(){
	return this.length;
}

stackMethods.push = function(value){
	this.storage[this.length] = value;
  this.length++;
  return this.length;
}

stackMethods.pop = function(){
		if (this.length > 0){
      this.length--;
    }
    
    var popped = this.storage[this.length];
    delete this.storage[this.length];
    return popped;
}

