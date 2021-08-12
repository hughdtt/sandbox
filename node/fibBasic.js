//Basic Recursive Fibonacci Implementation
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-2) + fib(n-1);
}

//Time taken for low number of n
console.time('nLow');
console.log(fib(6));
console.timeEnd('nLow');

//Time taken for high number of n
console.time('nHigh');
console.log(fib(50));
console.timeEnd('nHigh');