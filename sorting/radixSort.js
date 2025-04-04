function getDigit(num,i) {
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10
}

function digitCount(num){
    if( num===0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
    let maxDigits = 0
    for(let i=0; i<nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

function radixSort(nums){
    if (nums.length===0) return 0
    //find the longest number to know how many loops
    let maxDigitCount = mostDigits(nums)
    console.log(maxDigitCount)
    for (let k = 0; k < maxDigitCount; k++){
        // make our buckets
        let digitBuckets = Array.from({length:10}, () =>[])
        console.log(digitBuckets)
        for (let i=0; i<nums.length; i++) {
            let digit = getDigit(nums[i],k)
            digitBuckets[digit].push(nums[i])
        }
        console.log(digitBuckets)
        console.log("spread operator",...digitBuckets)
        nums = [].concat(...digitBuckets)
        console.log(nums)
    }
    return nums
}

radixSort([456,89,70,2,3,56789,800])

// Big O
// Time Complexity (Best): O(nk)
// Time Complexity (Average): O(nk)