/**
 *  Write a function 'canSum(targeSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
 * 
 * The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
 * 
 * You may use an element of the array as many times as needed
 * 
 * You may assume that all input numbers are nonnegative
 * 
 * e.g. canSum(7,[5,3,4,7]) -> true (3+4) or (7)
 */

const canSum = (targetSum, numbers, memo = {}) => {
    //memo
    if (targetSum in memo) return memo[targetSum];
    //base case
    if (targetSum === 0) return true;
    if (targetSum < 0 ) return false;
    //recursive call
    for (let element of numbers){
        const remainder = targetSum - element;
        if (canSum(remainder, numbers, memo) === true){
            memo[targetSum] = true;
            return memo[targetSum];
        }
    }
    memo[targetSum] = false;
    return memo[targetSum];
}

console.log(canSum(7, [2,3])) // True
console.log(canSum(7, [5,3,4,7])) // True
console.log(canSum(7, [2,4])) // False
console.log(canSum(300, [7,14])) // False

