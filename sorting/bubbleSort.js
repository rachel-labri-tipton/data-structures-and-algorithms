function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (let j=0; j < i-1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j]>arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                
            }
        }
        
    }
    return arr
}

bubbleSort([67,89,43,2,9])

function bubbleSort2(arr) {

    var noSwaps;
    
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]]
    }
    
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j=0; j < i-1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j]>arr[j+1]) {
                swap(arr, j, j+1)
                noSwaps = false
            }
        }
        if(noSwaps) break  
    }
    return arr
}

bubbleSort2([1,2,4,3])



