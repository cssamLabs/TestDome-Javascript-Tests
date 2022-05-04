/** challange
 * Fix the bugs in the registerHandlers function. 
 * An alert should display anchor's zero-based index within a document instead of following the link. 
 * For example, in the document below, the alert should display "2" 
 * when Google anchor is clicked since it is the third anchor element in the document 
 * and its zero-based index is 2.
<body>
  In my life, I used the following web search engines:<br/>
  <a href="//www.yahoo.com">Yahoo!</a><br/>
  <a href="//www.altavista.com">AltaVista</a><br/>
  <a href="//www.google.com">Google</a><br/>
</body>
*/

function registerHandlers() {
    var as = document.getElementsByTagName('a');
    Array.prototype.filter.call(as, function(div, index){
        div.onclick = function() {
            alert(index);
            return false;
        }
    })
}

/** Test Result - Your score is 100%, perfect! 
 *  Example case: Correct answer 
 *  Duplicate links: Correct answer 
 *  Various links: Correct answer 
 */