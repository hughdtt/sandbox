/**
 * Harder spinoff of the canSum/howSum algorithm
 * Details here: https://www.hackerrank.com/challenges/coin-change/problem
 * 
 * Base case; return empty if amount = 0;
 * 
 * Problem with current solution is that it doesn't do what is asked from the question. Function should return the number of ways you can make change from the coins, currently it returns a 2D array of all the possible ways of how to make the change from the coins. Since arrays are order specific, [1,2] and [2,1] count as different when in this situation they should be the same. Could think about using a data structure that isn't order specific like 
 */

const getWays = (amount, availableCoins) => {
    //base case
    if (amount === 0) return [[]];
    if (amount < 0) return [];
    let result = [];
    for (let coin of availableCoins){
        const remainder = amount - coin;
        const remainderResult = getWays(remainder, availableCoins)
        if (remainderResult !== []){
            const targetWays = remainderResult.map(way => [...way, coin ]) 
            result.push(...targetWays)
        } 
    }
    return result;
}

// console.log(getWays(4, [1,2,3])) //4
console.log(getWays(3, [8,3,1,2])) //3
// console.log(getWays(10, [2,5,3,6])) //5

