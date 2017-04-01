var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (typeof(value) === 'number' && arguments.length === 1) {
    var newChild = Tree(value);
    this.children.push(newChild);
  } else {
    return;
  }
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) { 
        var childNode = this.children[i];
        if (childNode.contains(target)) {
          return true;
        }
      }
    } 
  }

  return false;
};