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