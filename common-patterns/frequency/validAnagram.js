function validAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  const count = {};

  for (let char of s1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of s2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("raw", "car")); // false