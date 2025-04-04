function pivot(arr){
    let start = 0
    let end = arr.length-1
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

pivot([3,2,1,8,9])