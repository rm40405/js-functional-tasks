/**
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */


function makeAvg(arr){
    let sum =0;
    let avg;
    for(let array of arr){
       sum =sum+array;
    }
    avg=sum/arr.length;
    return avg.toFixed(2);
}
let avg = makeAvg([2,3,4,5,6,8]);
console.log(avg);