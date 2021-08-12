//Memoisation technique implemented fib
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n]
}

//Time taken for low number of n
console.time('nLow');
console.log(fib(6)); //8
console.timeEnd('nLow');

//Time taken for high number of n
console.time('nHigh');
console.log(fib(50));
console.timeEnd('nHigh');

