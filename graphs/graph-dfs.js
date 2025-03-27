// basic graph class with depth first search (dfs) graph traversal functions both dfs iterative and dfs recursive 
class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        // find key of v1 and push it into the list for that key 
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v!== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=>v!== v1)
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex) 
        }
        delete this.adjacencyList[vertex]
  }  
  // 
  depthFirstRecursive(start){
    // create a list to store the end result 
    // create an object to store the visited vertices
    const result = []
    const visited = {}
    let adjacencyList = this.adjacencyList
      
      // create a helper function to visit the vertices
    (function dfs(vertex) {
        if (!vertex) return null
        visited[vertex] = true
        result.push(vertex)
        adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            return dfs(neighbor)
          }
        })
    })(start)
    
    return result 
    }
  depthFirstIterative(start) { 
    const stack = [start]
    const result = []
    const visited = {}
    let currentVertex
    visited[start] = true
    while (stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return result
  }
}

// set up a graph to create the dfs function

let graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")


graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")

console.log(graph.depthFirstIterative("A"))


//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

