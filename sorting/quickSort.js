function pivot(arr, start=0, end=arr.length-1){
    function swap (arr, idx1, idx2) {
       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    
    let pivot = arr[start]
    let swapIdx = start
    
    for (let i = start+1; i<=end; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr,swapIdx,i)
        }
    }
    swap(arr,start,swapIdx)
    return swapIdx
}

function quickSort(arr, left=0, right=arr.length-1){
    //need a base case to quit the recursive call
    if (left<right){
         let pivotIndex = pivot(arr, left, right)
    //left
    quickSort(arr,left,pivotIndex-1)
    //right
    quickSort(arr,pivotIndex+1, right)
    }
   return arr
}

quickSort([4,6,9,25,1,2,5])