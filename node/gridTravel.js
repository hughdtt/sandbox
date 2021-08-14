/**
 * Suppose that you are traveler on a 2D grid. You being in the top-left corner and your goal is to travel to the bottom-right corner. You can only move down or right.
 * In how many ways can you travel to the goal on a grid with dimensions m*n (implies rectangle)?
 * Write a function `gridTraveler(m,n)` that calculates this.
 */

/**
 *  gridTraveler(2,3) -> 3 
 *  1. right, right, down
 *  2. right, down, right
 *  3. down, right, right
 * 
 *  -------------
 *  | S |   |   |
 *  -------------
 *  |   |   | E |
 *  -------------
 * 
 * Base Case -> gridTraveler(1,1) -> 1 ways
 *           -> gridTraveler(0,1) | gridTraveler(1,0) | gridTraveler(0,0) -> 0 ways
 * 
 * My next instinct is this is similiar to the fibonacci series where you are returning both the results from moving right or down (ie gridTravel(down) + gridTravel(right))
 * Note that moving right or down simply reduces the grid size to either (m-1,n) or (m,n-1) respectively.
 * I've memoised the recursive function below, but the logic remains the same.
 */

//Memoised
const gridTraveler = (m,n,memo = {}) => {
    const key = m + ',' + n;

    if (key in memo) return memo[key]
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n-1, memo);
    return memo[key];
}

console.log(gridTraveler(1,1)) // 1
console.log(gridTraveler(2,3)) // 3
console.log(gridTraveler(3,2)) // 3
console.log(gridTraveler(18,18)) //2333606220