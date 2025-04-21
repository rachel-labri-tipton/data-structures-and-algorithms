//Kth Largest Element in an Array
//  Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?


// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

// Follow up: Could you solve it in O(n) time complexity?
// Approach: Use a min heap to keep track of the k largest elements
// Time Complexity: O(n log k)
// Space Complexity: O(k)
function findKthLargest(nums, k) {
    const minHeap = new MinBinaryHeap();
    for (let num of nums) {
        minHeap.insert(num);
        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }
    return minHeap.extractMin();
}
// MinBinaryHeap class
class MinBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element >= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMin() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild < element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}
// Test cases
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4
console.log(findKthLargest([1, 2], 2)); // Output: 1


// Another option for solving this is quick select

function findKthLargest(nums, k) {
    // Convert kth largest to kth smallest
    k = nums.length - k;
    
    function quickSelect(left, right) {
        if (left === right) return nums[left];

        // Choose a random pivot
        let pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
        pivotIndex = partition(left, right, pivotIndex);

        if (k === pivotIndex) {
            return nums[k];
        } else if (k < pivotIndex) {
            return quickSelect(left, pivotIndex - 1);
        } else {
            return quickSelect(pivotIndex + 1, right);
        }
    }

    function partition(left, right, pivotIndex) {
        let pivot = nums[pivotIndex];
        // Move pivot to end
        swap(pivotIndex, right);
        let storeIndex = left;

        // Move all elements smaller than pivot to the left
        for (let i = left; i < right; i++) {
            if (nums[i] < pivot) {
                swap(storeIndex, i);
                storeIndex++;
            }
        }

        // Move pivot to its final place
        swap(right, storeIndex);
        return storeIndex;
    }

    function swap(a, b) {
        [nums[a], nums[b]] = [nums[b], nums[a]];
    }

    return quickSelect(0, nums.length - 1);
}

// Example usage:
console.log(findKthLargest([3,2,1,5,6,4], 2)); // Output: 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // Output: 4