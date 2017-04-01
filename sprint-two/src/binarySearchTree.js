var BinarySearchTree = function(value) {
  this.value = value, this.left = null, this.right = null;
};

BinarySearchTree.prototype.insert = function(val) {
  
  var insertTree = function(currentTree, val) {
    if (val < currentTree.value) {
      currentTree.left === null ? 
        currentTree.left = new BinarySearchTree(val) : insertTree(currentTree.left, val);
    } else if (val > currentTree.value) {
      currentTree.right === null ? 
        currentTree.right = new BinarySearchTree(val) : insertTree(currentTree.right, val);
    }
  };
  if (typeof(val) === 'number' && arguments.length === 1) {
    insertTree(this, val);
  } else {
    return;
  }
  
};

BinarySearchTree.prototype.contains = function(val) {
  
  if (this.value === val) {
    return true;
  } else {
    if (val < this.value) {
      return this.left !== null ? this.left.contains(val) : false;
    } else if (val > this.value) {
      return this.right !== null ? this.right.contains(val) : false;
    } 
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  
  func(this.value);

  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }

  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?

insertion & contains = O(logn) - recursion and splitting in half each time
depthFirstLog = O(n) - iterate over every child

 */




