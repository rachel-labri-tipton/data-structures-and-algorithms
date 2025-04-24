// A message is a string of uppercase letters, and it is encoded first using this scheme. For example, 'AZB' -> '1262'

// Given a string of digits S from 0-9 representing an encoded message, return the number of ways to decode it.

	/**
	@param S: string
	@return: integer
	*/

function decodeVariations (S) {

	if (S.length === 0 ) return 0;

	let pre = 27
	let cur = 0
	let first = 1
	let second = 1

	for (let i = S.length - 1; i>=0; i--) {
		let d = parseInt(S[i], 10); 
		console.log(d)
		if(d===0) {
			cur = 0
		} else {
			cur = first 
			// If combining d with pre forms a valid two-digit number between 10 and 26
            if (d * 10 + pre < 27) {
              cur += second;
              console.log("second",second)
            }
        }

        pre = d;
        [first, second] = [cur, first];
        console.log([cur, first])
  }
    console.log(cur)
    return cur;
}

console.log(decodeVariations('123342122'))



// using Tabulation 
function decodeVariationsTabulation(S) {
    const n = S.length;
    if (n === 0) return 0;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // Base case: an empty string
    if (S[0] !== '0') dp[1] = 1; // Only if the first character is not '0'

    for (let i = 2; i <= n; i++) {
        const oneDigit = S[i - 1];
        const twoDigits = S[i - 2] + oneDigit;

        // Check for valid single-digit decode
        if (oneDigit !== '0') {
            dp[i] += dp[i - 1];
        }

        // Check for valid two-digit decode
        if (twoDigits >= '10' && twoDigits <= '26') {
            dp[i] += dp[i - 2];
        }
    }
    
    return dp[n];
}

// Example usage
console.log(decodeVariationsTabulation('123342122'));

function decodeVariationsMemoization(S) {
    const memo = {}; // Cache for memoization

    function helper(index) {
        // Base case: If we reach the end of the string
        if (index === S.length) return 1;
        
        // If current character is '0', return 0 (invalid decodes)
        if (S[index] === '0') return 0;
        
        // Check if result is already computed
        if (memo[index] !== undefined) return memo[index];

        // Count ways for the current index's single digit
        let count = helper(index + 1);
        
        // Count ways for a valid two-digit number
        if (index + 1 < S.length) {
            const twoDigit = Number(S.substring(index, index + 2));
            if (twoDigit >= 10 && twoDigit <= 26) {
                count += helper(index + 2);
            }
        }

        // Store the result in the memo
        memo[index] = count;
        return count;
    }

    return helper(0);
}

// Example usage
console.log(decodeVariationsMemoization('123342122'));