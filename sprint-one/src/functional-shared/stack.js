var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
	push: function(value){
		this.storage[this.length] = value;
  	this.length++;
    return this.length;
	},

	pop: function() {
		if (this.length > 0){
      this.length--;
    }
    
    var popped = this.storage[this.length];
    delete this.storage[this.length];
    return popped;
	},

	size: function() {
		return this.length;
	}
};
