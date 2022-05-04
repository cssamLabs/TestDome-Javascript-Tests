/** Challange - Ensure
 * Implement the ensure function so that it throws an error if called without arguments or the argument is undefined.
 * Otherwise it should return the given value.
 */

 function ensure(value) {
    if(value === undefined){
        throw new Error('Value required');
    } 
    return value
  }
  
  try {
    console.log(ensure());
  } catch(err) {
    console.log(err);
  }

  /** Test - Result
   * No argument throws an error: Correct answer 
   * Truthy argument returns argument: Correct answer 
   * Falsy argument is treated differently from undefined: Correct answer
   */