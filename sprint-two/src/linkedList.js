var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;

  };

  list.removeHead = function() {
    var oldHead = list.head;

    if (list.head.next === null) {
      list.head = null;
    } else {
      list.head = list.head.next;
    }
    
    return oldHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;

    var iterate = function(node) {
      if (node.value === target) {
        return true;
      } else {
        return node.next !== null ? iterate(node.next) : false;
      }
    };

    return iterate(currentNode);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: O(1) - constant time
 removeHead: O(1) - constant time
 contains: O(n) - linear 
 */
