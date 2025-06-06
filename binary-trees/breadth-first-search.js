

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }
  // inserting a value is O(log n) time complexity
  insert (value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  // searching for a value is O(log n) time complexity
  find (value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains (value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS () {
    var node = this.root,
       data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder () {
    var data = [];
    function traverse (node) {
      // push value into data array 
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder () {
    var data = []
    function traverse (node) {
      // explore left, explore right
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      // push value into data array
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }
  DFSInOrder () {
    var data = []
    function traverse (node) {
      // explore left
      if (node.left) traverse(node.left)
      // push value into data array
      data.push(node.value)
      // explore right
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}
  
var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log("bfs",tree.BFS())
console.log("dfs pre-order", tree.DFSPreOrder())
console.log("dfs post-order", tree.DFSPostOrder())
console.log("dfs in-order", tree.DFSInOrder( ))