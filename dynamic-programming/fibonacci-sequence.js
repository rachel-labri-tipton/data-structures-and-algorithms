// fibonacci sequence wth memoization

function fib_memo(n, memo = []) { 
  if (memo[n] != undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
  memo[n] = res;
  console.log(memo);
  return res;} 


// fibonacci sequence with tabulation 

function fib_tab(n) {
  if (n <= 2) return 1;
  let tabulation = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    tabulation[i] = tabulation[i-1] + tabulation[i-2]
  }
  console.log(tabulation);
  return tabulation[n];
}


// examples 
console.log(fib_tab(10)); // 55

