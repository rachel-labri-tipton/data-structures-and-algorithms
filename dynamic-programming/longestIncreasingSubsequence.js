// Longest Increasing Subsequence
// Given an integer array nums, return the length of the longest strictly increasing subsequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // edge case nums is empty 
    if (nums.length===0) return 0
    //array to store end elements of the subsequence
    let dp = []

    for (let num of nums) {
        let left = 0, right = dp.length
// use binary search to find position to replace or extend dp array
        while (left<right) {
            let mid = Math.floor((left + right) /2)
            if(dp[mid]<num) {
                left = mid +1
            } else {
                right = mid
            }
        }
// if left is equal to length of dp, extend LIS
        if (left>=dp.length){
            dp.push(num)
        } else {
            dp[left] = num
        }
    }
    return dp.length
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])) // Output: 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])) // Output: 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])) // Output: 1
console.log(lengthOfLIS([])) 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
