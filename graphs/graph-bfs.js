// basic graph class with breadth first search (bfs) graph traversal function

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
  breadthFirstSearch (start) {
    const adjacencyList = this.adjacencyList
    const queue = [start]
    const result = []
    const visitedNodes = {}
    visitedNodes[start] = true
    let currentVertex 
    while (queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)
      adjacencyList[currentVertex].forEach(neighbor => {
        if(!visitedNodes[neighbor]) {
          visitedNodes[neighbor] = true
          queue.push(neighbor)
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
graph.addEdge("E", "F")




//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(graph)
console.log(graph.breadthFirstSearch("D"))
console.log(graph.breadthFirstSearch("A"))
console.log(graph.breadthFirstSearch("E"))