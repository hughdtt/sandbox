/**
 *  Write a function 'howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
 * 
 * The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.
 * 
 * You may use an element of the array as many times as needed
 * 
 * You may assume that all input numbers are nonnegative
 * 
 * e.g. canSum(7,[5,3,4,7]) -> [3,4]
 */

 const howSum = (targetSum, numbers, memo = {}) => {
    //memo
    if (targetSum in memo) return memo[targetSum];
    //base case
    if (targetSum === 0) return [];
    if (targetSum < 0 ) return null;
    //recursive call
    for (let element of numbers){
        const remainder = targetSum - element;
        const remainderResult = howSum(remainder, numbers, memo)
        if (remainderResult !== null){
            memo[targetSum] = [...remainderResult, element];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum];
}

console.log(howSum(7, [2,3])) // [3,2,2]
console.log(howSum(7, [5,3,4,7])) // [4,3]
console.log(howSum(7, [2,4])) // null
console.log(howSum(300, [7,14])) // null