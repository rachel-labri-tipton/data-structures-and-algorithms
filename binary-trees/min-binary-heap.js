 class MinBinaryHeap {
        
        constructor(capacity) {
            this.capacity = capacity;
            this.value = [];
        }
        
        enqueue(val) {
            this.value.push(val);
            this.bubbleUp(this.value.length-1);
            if(this.value.length > this.capacity) this.remove();
        }
        
        dequeue() {
            this.swap(0, this.value.length-1);
            const min = this.value.pop();
            this.sinkDown(0);
            return min;
        }
        
        bubbleUp(idx) {
            const parent = Math.floor((idx-1)/2);
            let max = idx;
            
            if(parent >= 0 && this.value[parent] > this.value[max]) max = parent;
            
            if(max !== idx) {
                this.swap(max, idx);
                this.bubbleUp(max);
            }
        }
        
        sinkDown(idx) {
            const leftChild = 2 * idx + 1;
            const rightChild = 2 * idx + 2;
            let min = idx;
            
            if(leftChild < this.value.length && this.value[leftChild] < this.value[min]) min = leftChild;
            if(rightChild < this.value.length && this.value[rightChild] < this.value[min]) min = rightChild;
            
            if(min !== idx) {
                this.swap(min, idx);
                this.sinkDown(min);
            }
        }
        
        swap(i, j) {
            [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
        }
 }
//
// Example usage:
const minHeap = new MinHeap(3);
minHeap.add(5);
minHeap.add(3);
minHeap.add(8);
minHeap.add(1);
console.log(minHeap.value); // Output: [1, 3, 5]
minHeap.add(2);