/** 
 * Write a function that converts user entered date 
 * formatted as M/D/YYYY to a format required by an API (YYYYMMDD). 
 * The parameter "userDate" and the return value are strings.
 * For example, it should convert user entered date
 *  "12/31/2014" to "20141231" suitable for the API.
*/

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    const values = userDate.split('/');
    let newDate = new Date(values[2], values[0]-1, values[1]);
    let formattedDate = newDate.toISOString().slice(0,10).replace(/-/g,"")
    return formattedDate
  }
  
console.log(formatDate("12/31/2014"));

/**   
  * Test Result - Your score is 100%, perfect!
  * Example case: Correct answer 
  * Two-digit month and day: Correct answer 
  * One-digit day: Correct answer 
  * One-digit month: Correct answer 
  */