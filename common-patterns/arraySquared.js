function arraySquared(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }
    for(let i=0; i <arr2.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i]**2)
        if(correctIndex === -1) {
            return false
        }
        console.log(arr2)
        arr2.splice(correctIndex,1)
    }
    return true
}

arraySquared([1,2,2,3],[1,4,4,9])