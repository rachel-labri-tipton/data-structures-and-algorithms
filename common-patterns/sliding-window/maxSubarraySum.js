function maxSubarraySum(arr,num){
  // address edge cases: array.length < subset length
  if (arr.length < num) return null 
  
  // this is a sliding window problem and the window is length num
  // create the window // initiate the maxSubarraySum
  let total = 0
  
  for (let i=0; i<num; i++) {
      total += arr[i]
      
  }

  console.log("total", total)
  
  let currentTotal = total
  
  for (let i=num; i<arr.length; i++) {
      console.log("current", currentTotal)
      console.log("total", total)
      currentTotal += arr[i] - arr[i-num]
      total = Math.max(total, currentTotal)
  }
  
  return total
  
}

maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)