class Node{
  constructor (val) {
    this.val = val
    this.next = null
    this.prev = null 
  }
}

class DoublyLinkedList{
  constructor () {
    this.head = null
    this.tail = null 
    this.length = 0
  }
  push (val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
    }
    this.length++
    return this
  }
  pop(){
    if(!this.head) return undefined
    let poppedNode = this.tail
    if(this.length===1){
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.next = null
    }
    this.length--
    return poppedNode 
  }
  shift(){
    if (this.length===0) return undefined
    let oldHead = this.head
    if (this.length===1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead 
  }
  unshift(val){
    let newNode = new Node(val)
    if (this.length === 0){
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this 
  }
  get(idx){
    if (idx < 0 || idx >= this.length) return null
    let count, current
    if (idx <= this.length/2){
      console.log("working from start")
      count = 0
      current = this.head
      while(count !== idx){
        current = current.next
        count++
      }
    } else {
      console.log("working from end")
      count = this.length - 1
      current = this.tail
      while(count !== idx) {
        current = current.prev
        count--
      }
    }
    return current
  }
  set(idx, val){
    let foundNode = this.get(idx)
    if (foundNode != null) {
      foundNode.val = val
      return true
    }
    return false
  }
  insert(idx,val){
    //challenge is a lot of connections to make and make a couple patches
    if(idx<0 || idx>this.length) return false
    if(idx === 0) return !!this.unshift(val)
    if (idx === this.length) return !!this.push(val)
    let newNode = new Node(val)
    let beforeNode = this.get(idx-1)
    let afterNode = beforeNode.next
    beforeNode.next = newNode, newNode.prev = beforeNode
    newNode.next = afterNode, afterNode.prev = newNode
    this.length++
    return true
  }
  
  remove(idx) {
    if(idx<0 || idx>=this.lenght) return undefined
    if(idx === 0) return !!this.shift()
    if (idx === this.length-1) return this.pop()
    let removedNode = this.get(idx)
    removedNode.prev.next = removedNode.next
    removedNode.next.prev = removedNode.prev
    removedNode.next = null
    removedNode.prev = null
    this.length--
    return removedNode
  }
}

let list = new DoublyLinkedList()
list.push("Ron")
list.push("Hermione")
list.push("Sirius")
list.push("Hagrid")