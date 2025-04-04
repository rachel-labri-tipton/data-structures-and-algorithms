function averagePair(arr,avgNum){
  // if there's an edge case, like [], then return false immediately
  if (arr.length===0) {
    console.log("empty")
    return false
  }
  // initiating the 2 pointer approach, we can look at pairs and their average
  let left = 0
  let right = arr.length-1
  
  // while loop to check pairs there may be more than one pair, we can return true if the average appears
  while (left<right) {
      let getAvg = arr[left] + arr[right]/ 2
      console.log(left, right, getAvg)
      if ( getAvg === avgNum ) return true 
      // set up the conditions for incrementing the pointers 
      else if (getAvg < avgNum) left++
      else right--
      console.log(getAvg)
  }
  return false 
}


averagePair([1,2,3,4,5,6,67], 2.5)