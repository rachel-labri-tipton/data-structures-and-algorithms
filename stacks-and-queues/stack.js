// singly linked list
// reference to next node

class Node{
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack{
  // this is very similar to a singly linked list
  // we're adding and removing from the beginning of the list 
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.first) {
            this.first = newNode
            this.last = newNode;
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
        // this.size++
        // return this;
    }
  pop () {
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

let stack = new newStack()