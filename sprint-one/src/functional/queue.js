var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var tempStorage = {};
    for (var key in storage){
      if (key > 0){
        tempStorage[key - 1] = storage[key];
      }
    }
    var dequeued = storage[0];
    if (size > 0){
      size--;
    }
    storage = tempStorage;
    return dequeued;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
