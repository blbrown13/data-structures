var Stack = function() {
 this.storage = {};
 this.length = 0;
};

Stack.prototype.size = function(){
	return this.length;
}

Stack.prototype.push = function(value){
  this.storage[this.length] = value;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function(){
  if (this.length > 0){
    this.length--;
  }
    
  var popped = this.storage[this.length];
  delete this.storage[this.length];
  return popped;
}

