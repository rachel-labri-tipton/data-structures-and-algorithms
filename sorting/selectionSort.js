function selectionSort (arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]]
    }
    
    for (var i=0; i < arr.length; i++) {
        var lowest = i
        // find the index of the lowest value 
        for(var j = i+1; j < arr.length; j++) {
            console.log(i,j)
            if(arr[j] < arr[lowest]) {
                lowest = j
            } 
        }
        if (i!==lowest) swap(arr, i, lowest)
    }
    return arr
}



selectionSort([32,22,10,19,17, 7, 9])