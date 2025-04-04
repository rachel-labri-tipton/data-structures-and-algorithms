function linearSearch(arr, val) {
    for (var i = 0; i<arr.length; i++) {
        if (arr[i] === val) return i
    }
    return -1
}

const names = ["james", "brian", "brandon"]

linearSearch(names, "brian")
