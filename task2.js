/**
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */
function takeNumber(numbers){
    let result;
    if(numbers%2===0){
         result = numbers/2;

    }
    else{
         result = numbers*2;
    }
    return result;
}
let result =takeNumber(4);
console.log("result:"+result);