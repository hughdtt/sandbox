/**
 * 
 * @param {*array to rotate} a 
 * @param {*number of rotations} d 
 */
const rotLeft = (a, d) => {
    // Write your code here
    /**
     * Easiest is to take an iterative approach
     * We can take advantage of some of javascript's built in array functions like splice, slice, pop, unshift, shift
     * 
     * for (let i = 0; i<d; i++)
     * 
     * save the element in arr[0]
     * slice array [1,2,3,4,5] => [2,3,4,5] (doesn't change the original)
     * arr.append(saved element)
     */

    // for (let i = 0; i < d; i++){
    //     let element = a[0];
    //     a = a.slice(1)
    //     a.push(element);
    // }

    // return a;

    return [...a.splice(d), ...a] //gangsta
}


arr = [1,2,3,4,5]

console.log(rotLeft(arr,3)) // [5,1,2,3,4]