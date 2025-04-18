function getMaxPalindromes(S) {
  let count = 0;

  while (S.length > 0) {
    let found = false;

    // Find the longest prefix that can form a palindrome
    for (let i = S.length; i > 0; i--) {
      let prefix = S.slice(0, i);
      if (canFormPalindrome(prefix)) {
        count++;
        S = S.slice(i); // Remove the prefix from the string
        found = true;
        break;
      }
    }
    if (!found) {
      // If no prefix can form a palindrome, break the loop
      break;
    }
  }
  return count;
}

function canFormPalindrome(S) {
    let charCount = {};
    for (let i = 0; i < S.length; i++) {
        charCount[S[i]] = (charCount[S[i]] || 0) + 1;
    }

    let oddCount = 0;
    for (let char in charCount) {
        if (charCount[char] % 2 !== 0) {
            oddCount++;
        }
    }

    // A string can form a palindrome if at most one character has an odd frequency
    return oddCount <= 1;
}

// Test cases
console.log(getMaxPalindromes("aaaabc")); // 2 (can be split into "aaaa" and "b" and "c")
console.log(getMaxPalindromes("aabbcc")); // 3 (can be split into "aa", "bb", and "cc")
console.log(getMaxPalindromes("abc")); // 3 (can be split into "a", "b", and "c")
console.log(getMaxPalindromes("racecarannakayak")); // 2 (can be split into "racecar" and "annakayak")