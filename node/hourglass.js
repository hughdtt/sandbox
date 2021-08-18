//Hourglass

/**
 * Complete the function hourglassSum in the editor below.
 * hourglassSum has the following parameter(s):
 * Inputs:
 * int arr[6][6]: an array of integers
 * Returns:
 * maximum hourglass sum
 *  
 */

/**
 * Iterate through hourglasses, if sum > maxSum then maxSum = sum;
 * 
 * Confinements; 6x6 array
 * 
 * 1st loop
 * a[0][0] + a[1][0] + a[2][0];
 *         + a[1][1];
 * a[0][2] + a[1][2] + a[2][2];
 * 
 * 2nd loop
 * a[1][0] + a[2][0] + a[3][0];
 *         + a[2][1];
 * a[2][2] + a[2][2] + a[2][2];
 * 
 * two for loops; loop through i(y); loop through j (x)
 * 
 */

const hourglassSum = (arr) => {
    let maxSum = 0;
    let firstSum = false;
    for (let i = 0; i < 4; i++){
        //iterate through x
        for (let j = 0; j < 4; j++){
            //iterate through y
            let sum = 0;
            let firstRow = 0;
            let secondRow = 0;
            let thirdRow = 0;

            //Calc rows
            firstRow = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            secondRow = arr[i+1][j+1];
            thirdRow = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            //Sum
            sum = firstRow + secondRow + thirdRow;
            console.log(sum)
            if (firstSum === false) {
                maxSum = sum; 
                firstSum = true;
            }
            if (sum > maxSum) {maxSum = sum}
        }
    }

    return maxSum;
}

const tstArr = [[-1,-1,0,-9,-2,-2], [-2,-1,-6,-8,-2,-5], [-1,-1,-1,-2,-3,-4], [-1,-9,-2,-4,-4,-5], [-7,-3,-3,-2,-9,-9], [-1,-3,-1,-2,-4,-5]]
console.log(hourglassSum(tstArr)) //28