// Suppose you want to calculate the factorial of any number
// Isn't this just another spinoff of the fibonacci series?
// ie 3! => 3 * 2! => 3 * (2 * 1!) => 3 * 2 * 1
// Base case: n = 1 returns 1;

const factorial = (n) => {
    if (n === 1) return 1;
    return n * (factorial(n-1));
}

console.log(factorial(3)) // 6
console.log(factorial(4)) // 24
console.log(factorial(5)) // 120
console.log(factorial(25)) // 1.5511210043330986e+25 //Notice this doesn't hang ; why?

/**
 * Time Complexity = Linear Time = Calls itself n times = O(n)
 * Space Complexity = Stack of N so also O(n)
 * Slightly different from Fibonacci because the return is (n * recursive call) rather than (recursive call + recursive call)
 */


