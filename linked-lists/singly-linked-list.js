// singly linked list
/*
push
pop
shift
unshift
get
set
insert
remove
reverse
*/

class Node{
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head;
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head) return undefined
        var current = this.head
        var newTail = current
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    shift(){
        if (!this.head) return undefined
        if (!this.length===0) return undefined
        let currentHead = this.head
        this.currentHead = currentHead.next 
        this.length--
        return currentHead
    }
    unshift(val){
        let newNode = new Node(val)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        } else{
            newNode.next = this.head
            this.head = newNode
            this.length++
            return this
        }
    }
    get(idx){
        if(!this.head) return undefined
        if (idx<0 || idx>=this.length){
            return null
        }
        let current = this.head
        let counter = 0
        while (counter !== idx){
            current = current.next 
            counter++
        }
        return current
    }
    set(idx, val){
        let foundNode = this.get(idx)
        if (foundNode){
            foundNode.val = val
            return true
        }
        return false
    }
    insert(idx,val){
        let newNode = new Node(val)
        if (idx<0 || idx > this.length) return false
        if (idx === this.length) this.push(val) 
        if (idx === 0)this.unshift(val)
        let prev = this.get(idx-1)
        let temp = prev.next 
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
        } 
    remove(idx){
        if (idx<0 || idx>= this.length) return undefined
        if (idx === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let prev = this.get(idx-1)
        let remv = prev.next 
        prev.next = remv.next
        this.length--
        return removed
    }
    reverse(){
        if (!this.length===0) return null
        let node = this.head
        this.head = this.tail
        this.tail = node 
        let prev = null
        for(var i = 0; i<this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next 
        }
        return this
    }
    print(){
        var arr = []
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(current)
    }
  rotate () {
    class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        return this;
    }

    rotate(n) {
    var trueN = ((n % this.length) + this.length) % this.length;
    if (trueN === 0 || this.length < 2) return this;
    var count = 0;
    var cur = this.tail;
    this.tail.next = this.head;
    while (count < trueN) {
      cur = cur.next;
      count++
    }
    this.tail = cur
    this.head = cur.next
    this.tail.next = null;
    return this;
  }
}

// Example usage:
let linkedList = new SinglyLinkedList();
linkedList.push(1).push(2).push(3).push(4).push(5);
linkedList.rotate(2); // Rotate right by 2 positions

// Print the rotated list
let current = linkedList.head;
while (current) {
    console.log(current.val); // Output: 4, 5, 1, 2, 3
    current = current.next;
}
  }
    }
        


let list = new SinglyLinkedList()
list.push(47)
list.push(3)
list.push(8)
list.push(9)
list.print()
list.insert(2, 5)
list.print()