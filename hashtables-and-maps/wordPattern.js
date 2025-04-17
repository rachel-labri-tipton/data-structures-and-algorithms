// //Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.
 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"

// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"

// Output: false

 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(' ')
  if (words.length !== pattern.length) return false
    console.log(words)
    // set up the objects to be mapped => character to words and words to characters
    let charToWord = {}
    let wordToCharacter = {}

    for (let i = 0; i<pattern.length; i++) {
        const char = pattern[i]
        const word = words[i]

        // check the conditions for the characters to word mapping 
        // if the key doesn't exist, add the pair 
        if (charToWord[char] === undefined ) {
            charToWord[char] = word
        } else if (charToWord[char] !== word) {
            return false 
        }
      console.log(charToWord)

        if (wordToCharacter[word] === undefined) {
            wordToCharacter[word] = char; // Create the mapping
        } else if (wordToCharacter[word] !== char) {
            return false; // Existing mapping does not match
        }
      console.log(wordToCharacter)
    }
   return true 
};

// Test cases
console.log(wordPattern("abba", "dog hi hi dog")) 
console.log(wordPattern("abba", "dog cat cat fish")) // false
console.log(wordPattern("aaaa", "dog cat cat dog")) // false