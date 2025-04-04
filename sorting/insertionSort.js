function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentVal = arr[i]
        for(var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
            console.log(arr, arr[j], arr[i])
        }
        arr[j+1] = currentVal
        console.log(arr, arr[j], arr[i])
    }
    return arr
}

insertionSort([3,5,2,78,9,44,7,25])



// Here's some guidance for how insertion sort should work:

// Start by picking the second element in the array (we will assume the first element is the start of the "sorted" portion)
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
// Repeat until the array is sorted.Implement insertion sort. Your function should accept an array and return an array of sorted values.