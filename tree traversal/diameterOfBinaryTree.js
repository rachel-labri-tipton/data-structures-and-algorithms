class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function diameterOfBinaryTree(root) {
  let maxDiameter = 0;

  function height(node) {
      if (node === null) {
          return 0;
      }
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);
      // Update the maximum diameter if the path through this node is longer
      maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);
      // Return height of the current node
      return Math.max(leftHeight, rightHeight) + 1;
  }

  height(root);
  return maxDiameter;
}

// Constructing the tree: [1,2,3,4,5]
const root = new TreeNode(1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log(diameterOfBinaryTree(root)); // Output: 3

