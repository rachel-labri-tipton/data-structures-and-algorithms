// the queue data structure

class Node{
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue{
  // this is very similar to a singly linked list
  // we're adding and removing from the beginning of the list 
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
  // adds to the end 
    enqueue (val) {
      let newNode = new Node(val)
      if (!this.first) {
          this.first = newNode
          this.last = newNode;
      } else {
        this.last.next = newNode
        this.last = newNode
      }
      return ++this.size
    }
  // removes from the beginning
    dequeue(){
    if (!this.first) return null 
    let temp = this.first
    if (this.first === this.last){
      this.last = null 
    }
    this.first = this.first.next
    this.size--
    return temp.val
    }
}

let queue = new newQueue()