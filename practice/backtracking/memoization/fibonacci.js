const fib = (n) => {
  if (n === 1) return 1;
  if (n === 0) return 0;

  console.log(`calculating f(${n})`);
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(8));

const fibWithMemo = (n, memo) => {
  if (memo[n]) return memo[n];

  if (n === 1) return 1;
  if (n === 0) return 0;

  console.log(`calculating f(${n})`);
  memo[n] = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo);

  return memo[n];
};

const memo = {};
console.log(fibWithMemo(8, memo));
