var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  set.length = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[this.length] = item;
    this.length++;
  }
};

setPrototype.contains = function(item) {
  for (key in this._storage) {
    if (this._storage[key] === item) {
      return true;
    }
  }

  return false;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    for (key in this._storage) {
      if (this._storage[key] === item) {
        delete this._storage[key];
        this.length--;
        break;
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 add = O(n)
 contains = O(n)
 remove = O(n)
 */
