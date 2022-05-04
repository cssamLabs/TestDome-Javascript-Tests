/** Challange - Closest Relative
 * The following HTML represents a family tree:
 * <James>
 * <Dave></Dave>
 * <Mike></Mike>
 * <Sarah></Sarah>
 * </James>
 * Implement the closestRelative function so that when a parent HTML element is passed, 
 * the function returns the parent's closest relative whose name matches the relativeName, 
 * and obeys the following rules:
 * The parent parameter is the HTML element of which the closest relative will be a descendant.
 * Each member of the family, including children, may also be a parent to one or more children.
 * Children are more closely related to the parent than grandchildren.
 * If several children in the same generation have the same name, then the first child in the tree is considered the closer relative.
 * If no matching relative is found the function should return null.
 * For example, the below code should print 'MIKE' for the given family tree:
 * let parent = document.getElementsByTagName('James')[0];
 * let relative = closestRelative(parent, 'Mike');
 * console.log(relative && relative.tagName); // prints MIKE
 */

/**
 * @param {HTMLElement} parent The HTML element of the parent
 * @param {string} relativeName The name of relative to be searched
 * @return {HTMLElement} The HTML element of the closest relative
 */
 function closestRelative(parent, relativeName) {
    if(parent.hasChildNodes()){
        let childern = parent.childNodes;
        for (let i = 0; i < childern.length; i++){
          let child = childern[i];
           if(child.hasChildNodes()){
               closestRelative(child, relativeName)
           } else {
             console.log('child.nodeName: ', child.nodeName)
             let childName = child.nodeName.toLowerCase();
             let relativeLower = relativeName.toLowerCase();
             //console.log('childName: ', childName);
             console.log('relativeLower: ', relativeLower);
             
             if(childName == relativeLower){
               return child;
             } else {
                continue;
             }
           }
        }
    } else {
        return null;
    }
  }
  
  // Example case
  document.body.innerHTML = 
  '<James>' +
    '<Dave></Dave>' +
    '<Mike></Mike>' +
    '<Sarah></Sarah>' +
  '</James>';
  
  let parent = document.getElementsByTagName('James')[0];
  let relative = closestRelative(parent, 'Mike');
  console.log(relative && relative.tagName); // prints MIKE


  /** Test - Result
   * Run OK
   * MIKE
   * 
   * Example case: Correct answer 
   * Several generations: TypeError 
   * Children with the same name: TypeError 
   */

  