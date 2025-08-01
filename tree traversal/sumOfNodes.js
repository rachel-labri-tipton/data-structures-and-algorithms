// Define the TreeNode class
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Function to compute the sum of all nodes
function sumOfNodes(root) {
  if (root === null) {
    return 0;
  }
  
  // Sum the current node value plus the sum of left and right subtrees
  return root.val + sumOfNodes(root.left) + sumOfNodes(root.right);
}



// Constructing a simple binary tree
const root = new TreeNode(10,
  new TreeNode(5),
  new TreeNode(15, new TreeNode(12), new TreeNode(20))
);

console.log(sumOfNodes(root)); // Output: 62