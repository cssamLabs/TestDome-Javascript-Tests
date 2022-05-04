/** Challange - Topic Coloring
 * Write the function newMessage, which receives the name of the topic as the parameter.
 * Function should change the background color of the p tag to red where the data-topic-name is topicName.
 * A topicName that doesn't have a matching data-topic-name should be ignored.
 * For example, if the HTML is:

 * <div>
 * <p data-topic-name="discussion">General discussion</p>
 * <p data-topic-name="bugs">Bugs</p>
 * <p data-topic-name="animals">Animals</p>
 * </div>
 * After calling newMessage("discussion") the HTML should be:

 * <div>
 * <p data-topic-name="discussion" style="background-color: red;">General discussion</p>
 * <p data-topic-name="bugs">Bugs</p>
 * <p data-topic-name="animals">Animals</p>
 * </div>
 */

 function newMessage(topicName) {
    const ps = document.getElementsByTagName('p');
    Array.prototype.filter.call(ps, function(cell, index){
      let topic = cell.getAttribute('data-topic-name');
      //console.log(topic, topicName);
      if(topic == topicName){
        cell.style = "background-color: red;";  
      }
      return false;
    })
  }
  
  // Example case
  document.body.innerHTML = `<div>
    <p data-topic-name="discussion">General discussion</p>
    <p data-topic-name="bugs">Bugs</p>
    <p data-topic-name="animals">Animals</p>
  </div>`;
  newMessage("discussion");
  console.log(document.body.innerHTML);

  /** Test Result - Your score is 100%, perfect!
   * Example case: Correct answer 
   * The topic with the newest message is red: Correct answer 
   * Function newMessage is called with some topicName(s) that do not exist: Correct answer 
   */
