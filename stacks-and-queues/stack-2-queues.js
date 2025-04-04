class Stack {
    constructor() {
        this.q1 = new Queue()
        this.q2 = new Queue()
    }
    push(val) {
        // Always enqueue in the empty queue
        this.q1.enqueue(val);
        
        // Move all elements from q2 back to q1
        while (this.q2.size > 0) {
            this.q1.enqueue(this.q2.dequeue());
        }
        
        // Swap the names of q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1];

        return this; // Return the stack instance for chaining
    }
    
    pop() {
        // Dequeue from q1, which is the stack top
        return this.q2.dequeue();
    }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
