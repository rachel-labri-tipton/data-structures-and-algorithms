function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  // initialize an object
  let collection  = {}
 
  // loop through values passed to the function and check values and augment
  for (let val in arguments) {
      collection[arguments[val]] = (collection[arguments[val]] || 0)+1
  }
  console.log(collection)
  //loop through the keys in the collection and anything over 1 is a duplicate
  for (let key in collection) {
      if (collection[key]>1) return true
  }
  return false
}

areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true