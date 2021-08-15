/**
 * Slightly harder spinoff of the canSum algorithm
 * Details here: https://www.hackerrank.com/challenges/coin-change/problem
 * 
 * Base case; return empty if amount = 0;
 */

const getWays = (amount, availableCoins) => {
    //base case
    if (amount === 0) return 1;
    if (amount < 0) return 0;

    let ways = 0;

    for (let coin of availableCoins){
        const remainder = amount - coin;
        
        //condition to check that there are no double ups
        ways += getWays(remainder, availableCoins)

    }
    console.log(combination)
    return ways;
}

console.log(getWays(4, [1,2,3])) //4
// console.log(getWays(3, [8,3,1,2])) //3
// console.log(getWays(10, [2,5,3,6])) //5

