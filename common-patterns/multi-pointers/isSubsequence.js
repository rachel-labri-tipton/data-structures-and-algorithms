function isSubsequence(str1, str2) {
  // initiate two pointers to loop through strings
  let i = 0
  let j = 0
  //if there's no value for  str1 return true
  if(!str1) return true 

  //loop for str2
  while (j<str2.length){
      //check character of str1 against character of str2
      if (str2[j]===str1[i]) i++
      console.log(str1[i], str2[j])
      if (i===str1.length) return true
      j++
  }
  return false
}

isSubsequence("fellow", "hello")

function isSubsequence2 (str1, str2) {
  // initiate two pointers to loop through the stings
  let i = 0
  let j = 0
  // if there's no value for str1, return true
  if (str1.length === 0) return true
  // loop trhough str2 and str1 but not a nested loop 
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++
    }
    j++
  }
  return i === str1.length
}

isSubsequence2("hero", "journey")
isSubsequence2("hello", "hello")