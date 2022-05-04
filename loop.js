/** Challange - Loop
 * Function appendChildren should add a new child div to each existing div. New divs should be decorated by calling decorateDiv.

 * For example, after appendChildren is executed, the following divs:

 * <div id="a">
 *  <div id="b">
 *  </div>
 * </div>
 * should take the following form (assuming decorateDiv does nothing):

 * <div id="a">
 * <div id="b">
 *   <div></div>
 * </div>
 * <div></div>
* </div>
* The code below should do the job, but for some reason it goes into an infinite loop. Fix the bugs.
*/

function appendChildren(decorateDiv) {
    var allDivs = document.getElementsByTagName("div");
    Array.prototype.filter.call(allDivs, function(div, index){;
        var newDev = document.createElement("div");
        decorateDiv(newDev);
        div.appendChild(newDev);
      });
  }
  
  // Example case. 
  document.body.innerHTML = `
  <div id="a">
    <div id="b">
    </div>
  </div>`;
  
  appendChildren(function(div) {});
  console.log(document.body.innerHTML);

  /** Test - results
   * <div id="a">
   *  <div id="b">
   *   <div></div>
   *  </div>
   *  <div></div>
   * </div>
   * Example case: Correct answer 
   * Appending divs: Correct answer 
   */