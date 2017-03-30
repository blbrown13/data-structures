var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.length = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.length] = value;
	this.length++;
}

queueMethods.dequeue = function() {
	var tempStorage = {};
	for (var key in this.storage){
		if (key > 0){
			tempStorage[key - 1] = this.storage[key];
		}
	}

	var finished = this.storage[0];
	if (this.length > 0){
		this.length--;
	} 

	this.storage = tempStorage;
	return finished;
}

queueMethods.size = function() {
	return this.length;
}
