/**
 * Slightly harder spinoff of the canSum/howSum algorithm
 * Details here: https://www.hackerrank.com/challenges/coin-change/problem
 * 
 * Base case; return empty if amount = 0;
 * 
 * Problem with current solution is that it returns every valid set of coins ie. for 4,[1,2,3] -> [1,1,2] and [2,1,1] count as 2 ways and not one
 */

const getWays = (amount, availableCoins) => {
    //base case
    if (amount === 0) return [[]];
    if (amount < 0) return [];
    let result = [];
    for (let coin of availableCoins){
        const remainder = amount - coin;
        const remainderResult = getWays(remainder, availableCoins)
        if (remainderResult !== null){
            const targetWays = remainderResult.map(way => [...way, coin ]) //this is trippy as heck
            result.push(...targetWays)
        } 
    }
    return result;
}

// console.log(getWays(4, [1,2,3])) //4
// console.log(getWays(3, [8,3,1,2])) //3
console.log(getWays(10, [2,5,3,6])) //5

