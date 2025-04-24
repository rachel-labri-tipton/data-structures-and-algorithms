
// Decode Variations
// Given a string of digits S from 0-9 representing an encoded message, return # of ways to decode it
/**
	@param S: string
	@return: integer
	*/
function decodeVariations (S) {
  // if string is empty return 0
  if (S.length === 0) return 0
  // loop through the string and find how many two digit pairs <=26
  let array = S.split('')
  console.log(array)
  let counter = 0
  let i = 0
  while (i<array.length) {
    // find # of two digit combinations less than 26
    let num = Number(S.slice(i, i + 2))
    if (num <= 26) {
      counter++
    }
    i++
  }
  return counter + 1
}




	


// 126226
// i+1 

console.log(decodeVariations('126226')
)