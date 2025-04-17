// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is a

function smallestPositiveInteger(A) {
    const N = A.length;

    // Step 1: Remove negative numbers and numbers greater than N
    for (let i = 0; i < N; i++) {
        if (A[i] <= 0 || A[i] > N) {
            A[i] = N + 1; // Use N + 1 to mark as not needed
        }
    }
    console.log(A)

    // Step 2: Use index mapping to mark the presence of numbers
    for (let i = 0; i < N; i++) {
        const num = Math.abs(A[i]);
        if (num <= N) {
            A[num - 1] = -Math.abs(A[num - 1]); // Mark as negative to indicate presence
        }
    }
    console.log(A)

    // Step 3: Find the first positive integer missing
    for (let i = 0; i < N; i++) {
        if (A[i] > 0) {
            return i + 1; // The smallest missing positive integer
        }
    }
    console.log(A)


    // If all numbers from 1 to N are present, the answer is N + 1
    return N + 1;
}

// Example usage:
console.log(smallestPositiveInteger([1, 3, 6, 4, 1, 2])); // Output: 5
console.log(smallestPositiveInteger([1, 2, 3])); // Output: 4
console.log(smallestPositiveInteger([-1, -3])); // Output: 1