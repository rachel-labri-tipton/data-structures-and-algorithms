function mergeSortHelper(arr1, arr2) {
    let results = []
    let i = 0
    let j = 0
    
    while (i<arr1.length && j<arr2.length) {
        if(arr2[j]>arr1[i]){
            results.push(arr1[i])
            i++
        }
        else {
            results.push(arr2[j])
            j++
        }
    }
    while (i<arr1.length) {
        results.push(arr1[i])
        i++
    }
     while (i<arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results
}


// mergeSortHelper(data)

function mergeSort(arr){
    // base case 
    if(arr.length <=1) return arr;
    // find mid 
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return mergeSortHelper(left,right)
}

mergeSort([1,23,55,67,8,3,5])