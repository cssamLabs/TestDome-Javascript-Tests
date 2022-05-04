/** Challange - Two Sum 
 * Write a function that, when passed an array and
 * a target sum, returns, efficiently with respect to time used,
 * two distinct zero-based indices of any two of the numbers,
 * whose sum is equal to the target sum. 
 * If there are no two numbers, the function should return null.

 * For example, findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10) 
 * should return an array containing any of the following pairs of indices:

 * 0 and 3 (or 3 and 0) as 3 + 7 = 10
 * 1 and 5 (or 5 and 1) as 1 + 9 = 10
 * 2 and 4 (or 4 and 2) as 5 + 5 = 10
*/

/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
 function findTwoSum(numbers, sum) {
    let results = [];
    numbers.forEach((number1, index1) =>{
        numbers.forEach((number2, index2) =>{
            if(index1 !== index2 && number1+number2 == sum){
                const newItem = [index1, index2]
                if(!results.includes(newItem.reverse)){
                    results.push(newItem);
                }
            }
        })
    })
    return results.splice(0, results.length/2)
  }
  
  const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 8);
  console.log(indices);

