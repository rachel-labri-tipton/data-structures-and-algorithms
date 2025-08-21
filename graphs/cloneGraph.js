// ---------- Node definition ----------
class Node {
  constructor(val) {
      this.val = val;
      this.neighbors = [];
  }
}

// ---------- Clone Graph ----------
// Definition for a Node.

function cloneGraph(node) {
  const visited = new Map();

  function dfs(node) {
      if (!node) return null;

      // If the node was already cloned, return it
      if (visited.has(node)) {
          return visited.get(node);
      }

      // Clone the node
      const cloneNode = new Node(node.val);
      visited.set(node, cloneNode);

      // Clone neighbors
      for (let neighbor of node.neighbors) {
          cloneNode.neighbors.push(dfs(neighbor));
      }

      return cloneNode;
  }

  return dfs(node);
}
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.neighbors.push(node2, node3);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node1, node2);

// Clone the graph
const cloned = cloneGraph(node1);

// Simple test to check if the clone is correct
console.log('Original node:', node1.val, 'Neighbors:', node1.neighbors.map(n => n.val));
console.log('Cloned node:', cloned.val, 'Neighbors:', cloned.neighbors.map(n => n.val));

// Check if the cloned nodes are not the same as the original nodes
console.log('Is cloned node1 a new object?', cloned !== node1 ? 'PASS' : 'FAIL');
console.log('Is cloned node2 a new object?', cloned.neighbors[0] !== node2 ? 'PASS' : 'FAIL');