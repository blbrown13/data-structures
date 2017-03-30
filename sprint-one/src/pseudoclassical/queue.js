var Queue = function() {
  this.storage = {};
  this.length = 0;
};

Queue.prototype.size = function() {
  return this.length;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
}

Queue.prototype.dequeue = function() {
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
