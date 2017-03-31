

// Instantiate a new graph
var Graph = function() {
	this.vertices = [];
	this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.vertices.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	if (this.vertices.includes(node)) {
		return true;
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	if (this.contains(node)) {
		var index;
		for (var i = 0; i < this.vertices.length; i++) {
			if (this.vertices[i] === node) {
				index = i;
			}
		}
		this.vertices.splice(index, 1);

		var edgeIndex = [];
		for (var j = 0; j < this.edges.length; j++) {
			var pair = this.edges[j];
			if (pair.includes(node)) {
				this.removeEdge(pair[0], pair[1]);
			}
		}
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	for (var i = 0; i < this.edges.length; i++) {
		var pair = this.edges[i];
		if (pair.includes(fromNode) && pair.includes(toNode)) {
			return true;
		}
	}
	return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	var edgePair = [fromNode, toNode].sort();
	this.edges.push(edgePair);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	if (this.hasEdge(fromNode, toNode)) {
		var index;
		for (var i = 0; i < this.edges.length; i++) {
			var pair = this.edges[i];
			if (pair.includes(fromNode) && pair.includes(toNode)) {
				delete this.edges.splice(i, 1);
				break;
			}
		}	
	}
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (var i = 0; i < this.vertices.length; i++) {
		cb(this.vertices[i]);
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 addNode = O(1)
 contains = O(n)
 removeNode = O(n)
 hasEdge = O(n)
 addEdge = O(1)
 removeEdge = O(n)
 forEachNode = O(n)
 */


