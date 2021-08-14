/**
 * Intro into dynamic programming, started off with Fibonacci series to get around the idea of recursion and memoisation. 
 * 
 * Fibonacci numbers are just a sequence of numbers where the next number is the sum of the two previous numbers
 * ie 1,1,2,3,5,8...
 * 
 * Things to note:
 *  - Since we divide the problem into subproblems, we can use recursion (establish base case and then return itself)
 *  - In this case, since we are calling function + function; we end up with time complexity of O(2^n) - which kinda sucks for bigger values of n
 *  - Dynamic Programming utlises a technique called Memoisation which improves the time bottleneck to O(n) - which is good!
 */

//Basic Recursive Fibonacci Implementation
const fibBasic = (n) => {
    if (n <= 2) return 1;
    return fibBasic(n-2) + fibBasic(n-1);
}

//Memoisation technique implemented fib
const fibMemo = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n]
}

//Time comparison for both techniques
console.time('Basic Time: ');
console.log(fibBasic(50)); //Returns 12586269025 in 1m 55s 701 ms
console.timeEnd('Basic Time: ');

console.time('Memoised Time: ');
console.log(fibMemo(50)); //Returns 12586269025 in 0.277ms
console.timeEnd('Memoised Time: ');