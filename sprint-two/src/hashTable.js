
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // var needsToBeResized = this.needsResizing();
  // if (needsToBeResized === 'larger'){
  //   this.resize(2);
  // }

  var index = getIndexBelowMaxForKey(k, this._limit);
  var newTuple = [k, v];
  var bucket = this._storage.get(index);

  if (bucket) {
    bucket.push(newTuple);
  } else {
    var newBucket = [];
    newBucket.push(newTuple);
    var val = newTuple[1];
    this._storage.set(index, newBucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var val;

  bucket.forEach(function(tuple) {
    if (tuple[0] === k) {
      val = tuple[1];
    }
  });

  return val;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tupleIndex;

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tupleIndex = i;
    }
  }

  bucket.splice(tupleIndex, 1);
  this._storage.set(index, bucket);

  // var needsToBeResized = this.needsResizing();
  // if (needsToBeResized === 'smaller'){
  //   this.resize(2);
  // }
};

// HashTable.prototype.countBuckets = function(){
//   var count = 0;
//   this._storage.each(function(bucket){
//     if (bucket){
//       for (var i = 0; i < bucket.length; i++){
//         var tuple = bucket[i];
//         if (tuple){
//         count++;
//         }
//       }
//     }
//   });
//   return count;
// };

// HashTable.prototype.needsResizing = function(){
//   var size = this.countBuckets();
//   if (size / this._limit >== 0.75){
//     return 'larger';
//   } else if (size / this._limit <== 0.25){
//     return 'smaller';
//   }
//   return false;
// };

// HashTable.prototype.resize = function(val){
//   this._limit *= val;
// };


/*
 * Complexity: What is the time complexity of the above functions?
 */



