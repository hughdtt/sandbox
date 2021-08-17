/**
 * Inputs: c.length, c
 * 
 * Avoid array[elements] = 1;
 * 
 * Return minimum number of jumps
 * 
 * Thinking that we have to iterate through the array; check if it's a 0 or 1;
 * If 0 jump++, else do nothing
 * 
 * Works when 1 are spaced out 
 * What happens if we want to jump over a 0?
 * 
 * 0,0,0,1,0,0 (here we are treating c[1] as a 1 even though it's a zero); so what really matters is the position of the 0
 */

const minJumps = (c) => {
    let jumps = 0;
    for (let cloud = 0; cloud<c.length; cloud++){ 
        if (c[cloud] === 0) {
            jumps++;
            if (c[cloud+1] === 0 && c[cloud+2] === 0){
                cloud++;
            }
        }
    }

    return jumps - 1;
}

// console.log(minJumps([0,0,1,0,0,1,0])) //4
console.log(minJumps([0,0,0,0,1,0])) //3